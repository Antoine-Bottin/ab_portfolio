'use client'

import { useState } from 'react'

import classNames from 'classnames'

import Link from 'next/link'

import './styles.scss'

interface Props {
    menu: { label: string; value: string }[]
}

const BurgerMenu = ({ menu }: Props) => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    const handleBurgerMenuState = () => {
        setIsBurgerMenuOpen((prev) => !prev)
    }

    return (
        <>
            <div
                className={classNames('burger-menu-component', {
                    open: isBurgerMenuOpen,
                })}
                onClick={handleBurgerMenuState}
            >
                <div className="burger-menu-component__line first"></div>
                <div className="burger-menu-component__line second"></div>
                <div className="burger-menu-component__line third"></div>
            </div>
            {isBurgerMenuOpen ? (
                <div className="burger-menu-overlay">
                    <div className="burger-menu-overlay__background"></div>
                    <div className="burger-menu-overlay__links">
                        {menu.map(({ label, value }) => {
                            return (
                                <div className="link-container" key={value}>
                                    <Link
                                        href={value}
                                        className="link"
                                        onClick={handleBurgerMenuState}
                                    >
                                        {label}
                                    </Link>
                                    <div className="underline"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default BurgerMenu
