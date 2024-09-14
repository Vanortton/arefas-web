import { Diversity3Rounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Member } from '../../../types/MembersType'
import PageHeader from '../../template/PageHeader/PageHeader'
import MembersItem from './MembersItem'

export default function Members() {
    const [members, setMembers] = useState<Member[]>([])
    const [expanded, setExpanded] = useState<number | false>(false)

    useEffect(() => {
        setMembers([
            {
                id: 1,
                name: 'John Doe',
                address: '123 Main St',
                neighborhood: 'Centro',
                zip_code: '12345-678',
                cpf: '123.456.789-00',
                marital_status: 'Single',
                phone_number: 11912345678,
                date_of_birth: 20000115,
                email: 'example1@example.com',
                social_network: '@user1',
                unit_served: '1st Infantry Division',
                year_served: 2021,
                number: '1',
                war_name: 'Shadow Hunter',
                obs: 'Excellent marksman',
            },
            {
                id: 2,
                name: 'Jane Smith',
                address: '456 Oak Ave',
                neighborhood: 'Jardim',
                zip_code: '23456-789',
                cpf: '987.654.321-00',
                marital_status: 'Married',
                phone_number: 21987654321,
                date_of_birth: 19950620,
                email: 'example2@example.com',
                social_network: '@user2',
                unit_served: '2nd Cavalry Brigade',
                year_served: 2019,
                number: '2',
                war_name: 'Steel Wolf',
                obs: 'Expert in hand-to-hand combat',
            },
            {
                id: 3,
                name: 'Carlos Silva',
                address: '789 Pine Rd',
                neighborhood: 'Vila Nova',
                zip_code: '34567-890',
                cpf: '321.654.987-00',
                marital_status: 'Divorced',
                phone_number: 31923456789,
                date_of_birth: 19881130,
                email: 'example3@example.com',
                social_network: '@user3',
                unit_served: '3rd Artillery Regiment',
                year_served: 2015,
                number: '3',
                war_name: 'Thunderbolt',
                obs: 'Specialist in explosives',
            },
            {
                id: 4,
                name: 'Maria Oliveira',
                address: '101 Maple St',
                neighborhood: 'São Pedro',
                zip_code: '45678-901',
                cpf: '456.789.123-00',
                marital_status: 'Widowed',
                phone_number: 41934567890,
                date_of_birth: 19790410,
                email: 'example4@example.com',
                social_network: '@user4',
                unit_served: '4th Engineer Battalion',
                year_served: 2010,
                number: '4',
                war_name: 'Iron Giant',
                obs: 'Master in fortifications',
            },
            {
                id: 5,
                name: 'Lucas Mendes',
                address: '202 Birch Blvd',
                neighborhood: 'Liberdade',
                zip_code: '56789-012',
                cpf: '654.321.098-00',
                marital_status: 'Single',
                phone_number: 51945678901,
                date_of_birth: 19920725,
                email: 'example5@example.com',
                social_network: '@user5',
                unit_served: '5th Special Forces Group',
                year_served: 2020,
                number: '5',
                war_name: 'Silent Eagle',
                obs: 'Expert in reconnaissance missions',
            },
        ])
    }, [])

    const handleAccordionChange = (id: number) => {
        setExpanded(expanded === id ? false : id)
    }

    return (
        <React.Fragment>
            <PageHeader
                icon={<Diversity3Rounded />}
                title='Associados'
            />
            {members.map((member) => (
                <MembersItem
                    key={member.id}
                    member={member}
                    expanded={expanded === member.id}
                    onChange={() => handleAccordionChange(member.id)}
                />
            ))}
        </React.Fragment>
    )
}
