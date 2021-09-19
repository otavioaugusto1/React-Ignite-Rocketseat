import React from 'react'
import { ReposityItem } from './RepositoryItem'
import '../styles/repositories.scss'
import {useState, useEffect} from 'react';

// https://api.github.com/orgs/rocketseat/repos


const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
    const [repositories, useRepositories] = useState([])
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <ReposityItem repository = {repository}/>
                <ReposityItem repository = {repository}/>
                <ReposityItem repository = {repository}/>
                <ReposityItem repository = {repository}/>
            </ul>
        </section>
    )
}