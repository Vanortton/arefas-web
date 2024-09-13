import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Slider,
} from '@mui/material'
import React, { useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import ImagePlaceholder from '../../../assets/imgs/select-image-placeholder.png'
import SimpleMenu from '../SimpleMenu/SimpleMenu'
import getCroppedImg from './getCroppedImg'

export default function SelectAvatar() {
    const [image, setImage] = useState<string | null>(null)
    const [croppedArea, setCroppedArea] = useState<Area | null>(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [openDialog, setOpenDialog] = useState(false)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setImage(reader.result as string)
                setOpenDialog(true)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleCropComplete = async () => {
        if (image && croppedArea) {
            const croppedImage = await getCroppedImg(image, croppedArea)
            setImage(croppedImage)
            setOpenDialog(false)
        }
    }

    const menuItems = [
        {
            label: 'Remover imagem',
            onClick: () => setImage(null),
        },
        {
            label: 'Inserir nova imagem',
            onClick: () => document.getElementById('imageInput')?.click(),
        },
    ]

    return (
        <div>
            {image ? (
                <SimpleMenu
                    trigger={
                        <IconButton>
                            <img
                                src={image}
                                alt='Selecionar'
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                            />
                        </IconButton>
                    }
                    items={menuItems}
                />
            ) : (
                <IconButton
                    onClick={() =>
                        document.getElementById('imageInput')?.click()
                    }
                    sx={{
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
                    }}
                >
                    <img
                        src={ImagePlaceholder}
                        alt='Inserir'
                        style={{ width: 100, height: 100, borderRadius: '50%' }}
                    />
                </IconButton>
            )}

            <input
                type='file'
                id='imageInput'
                style={{ display: 'none' }}
                accept='image/*'
                onChange={handleImageUpload}
            />

            <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                maxWidth='sm'
                fullWidth
            >
                <DialogTitle>Cortar Imagem</DialogTitle>
                <DialogContent>
                    {image && (
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: 400,
                            }}
                        >
                            <Cropper
                                image={image}
                                crop={crop}
                                zoom={zoom}
                                aspect={1}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={(_, croppedAreaPixels) =>
                                    setCroppedArea(croppedAreaPixels)
                                }
                            />
                        </div>
                    )}
                    <Slider
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        onChange={(_, zoom) => setZoom(zoom as number)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={handleCropComplete}>Cortar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
