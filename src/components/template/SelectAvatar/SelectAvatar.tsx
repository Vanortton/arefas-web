import { PanoramaOutlined } from '@mui/icons-material'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Slider,
    Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import SimpleMenu from '../SimpleMenu/SimpleMenu'
import getCroppedImg from './getCroppedImg'

type SelectAvatarProps = {
    imageURL?: string
    onImageChange: (image: File | null) => void
}

export default function SelectAvatar({
    imageURL,
    onImageChange,
}: SelectAvatarProps) {
    const [image, setImage] = useState<string | null>(imageURL || null)
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
            const blob = await fetch(croppedImage).then((r) => r.blob())
            const file = new File([blob], 'avatar.png', { type: 'image/png' })
            setImage(URL.createObjectURL(blob))
            onImageChange(file)
            setOpenDialog(false)
        }
    }

    const handleRemoveImage = () => {
        setImage(null)
        onImageChange(null)
    }

    const handleInsertImage = () => {
        document.getElementById('imageInput')?.click()
    }

    const menuItems = [
        {
            label: 'Remover imagem',
            onClick: handleRemoveImage,
        },
        {
            label: 'Inserir nova imagem',
            onClick: handleInsertImage,
        },
    ]

    useEffect(() => {
        if (image) {
            const fetchImageBlob = async () => {
                const response = await fetch(image)
                const blob = await response.blob()
                const file = new File([blob], 'avatar.png', { type: blob.type })

                // Verifique se a imagem é diferente antes de chamar onImageChange
                if (file) onImageChange(file)
            }
            fetchImageBlob()
        } else {
            onImageChange(null)
        }
    }, [image]) // Removido onImageChange como dependência

    return (
        <Box sx={{ width: 'fit-content' }}>
            {image ? (
                <SimpleMenu
                    trigger={
                        <IconButton className='p-0'>
                            <img
                                src={image}
                                alt='Selecionar'
                                style={{
                                    width: 90,
                                    height: 120,
                                    objectFit: 'cover',
                                }}
                            />
                        </IconButton>
                    }
                    items={menuItems}
                />
            ) : (
                <Box sx={{ cursor: 'pointer', position: 'relative' }}>
                    <IconButton
                        onClick={handleInsertImage}
                        sx={{
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
                            padding: '20px',
                            width: 90,
                            height: 120,
                            backgroundColor: '#000000',
                            borderRadius: '0%',
                            '&:hover': {
                                boxShadow: '5px 5px 0px #333',
                                backgroundColor: '#000000',
                            },
                        }}
                    >
                        <PanoramaOutlined
                            sx={{
                                fontSize: 60,
                                color: '#7c8188',
                            }}
                        />
                    </IconButton>
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            padding: '2px 0',
                        }}
                    >
                        <Typography
                            sx={{ color: 'white', fontSize: 12 }}
                            className='text-center'
                        >
                            Carregar
                        </Typography>
                    </Box>
                </Box>
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
                                aspect={3 / 4}
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
        </Box>
    )
}
