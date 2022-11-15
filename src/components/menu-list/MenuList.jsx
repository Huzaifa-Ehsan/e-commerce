import React, { Component } from 'react'
import MenuItem from '../menu-item/MenuItem';
import './MenuList.scss'

export default class MenuList extends Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                title: "Software Company",
                imageUrl: "https://c0.wallpaperflare.com/preview/428/871/775/school-coding-data-software-development.jpg",
                id: 1
            },
            {
                title: "Laptop",
                imageUrl: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
                id: 2
            },
            {
                title: "Sky",
                imageUrl: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Very-Sad-Alone-Image-Wallpaper-Download.jpg",
                id: 3
            },
            {
                title: "Coding",
                imageUrl: "https://c0.wallpaperflare.com/preview/655/944/913/computer-keyboard-technology-work.jpg",
                size: "large",
                id: 4
            },
            {
                title: "Source Code",
                imageUrl: "https://c4.wallpaperflare.com/wallpaper/274/323/713/code-php-html-ilya-pavlov-wallpaper-preview.jpg",
                size: "large",
                id: 5
            }]
        }
    }
    render() {
        return (
            <div className='menu-list'>
                {this.state.sections.map(({ id, title, imageUrl, size }) => {
                    return (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    )
                })}
            </div>
        )
    }
}
