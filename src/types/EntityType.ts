type Entity = {
    personal: {
        avatar?: File | string | null
        name: string
        cpf: string
        reservist_number?: string
        retirement_date?: string
        birth_date: string
        marital_status: 'married' | 'single'
        sex: 'male' | 'female'
        profession: string
        blood_type: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
    }
    military?: {
        unit_served?: string
        war_name?: string
        year_served?: string
        number_year?: string
        company?: string
    }
    contact: {
        emails?: {
            email: string
            primary: boolean
        }[]
        phones?: {
            phone: string
            primary: boolean
        }[]
        addresses?: {
            cep: string
            state: string
            city: string
            street: string
            number: string
            primary: boolean
        }[]
        socials?: {
            username: string
            platform: string
        }[]
    }
    association: {
        id: string
        category:
            | 'director'
            | 'president'
            | 'secretary'
            | 'treasurer'
            | 'associate'
            | 'collaborator'
            | 'friend_emeritus'
        association_date: string
        validity: string
        status: 'active' | 'inactive'
    }
    files?: [
        {
            date: string
            description: string
            url: string
        }
    ]
}

export type { Entity }
