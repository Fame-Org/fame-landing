import * as React from "react";
import {discordURL, fbURL, githubUrl, instagramUrl, linkedInUrl, telegramURL, twitterURL} from "../utils/constants";


const SocialMedia = () => {
    return (

        <div className="vertical-social">
            <ul>
                <li><a target="_blank" href={telegramURL}><i className="fab fa-telegram" aria-hidden="true"/></a></li>
                <li><a target="_blank" href={discordURL}><i className="fab fa-discord" aria-hidden="true"/></a></li>
                <li><a target="_blank" href={fbURL}><i className="fab fa-facebook" aria-hidden="true"/></a></li>
                <li><a target="_blank" href={twitterURL}> <i className="fab fa-twitter" aria-hidden="true"/></a></li>
                <li><a target="_blank" href={githubUrl}><i className="fab fa-github" aria-hidden="true"/></a></li>
                <li><a target="_blank" href={instagramUrl}><i className="fab fa-instagram" aria-hidden="true"/></a></li>
                <li><a target="_blank" href={linkedInUrl}><i className="fab fa-linkedin" aria-hidden="true"/></a></li>
            </ul>
        </div>


    )
}

export default SocialMedia