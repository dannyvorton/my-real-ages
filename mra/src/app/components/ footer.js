import {
    GitHubShareButton,
    GitHubIcon,
    LinkedInShareButton,
    LinkedInIcon,
} from 'next-share'

export default function Footer() {
    return (

        <div>

            <GitHubShareButton url={'https://github.com/dannyvorton/my-real-age'}>
                <GitHubIcon size={32} round />
            </GitHubShareButton>

            <LinkedInShareButton url={'https://www.linkedin.com/in/orton/'}>
                <LinkedInIcon size={32} round />
            </LinkedInShareButton>

        </div>

    )
}
