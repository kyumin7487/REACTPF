import './Head.css'
export default function Head() {
    return (
        <div className='headerWrap'>
            <header className='header'>
                <nav className='nav'>
                    <li><a href="#">소개</a></li>
                    <li><a href="#">스킬</a></li>
                    <li><a href="#">포트폴리오</a></li>
                    <li><a href="#">문의</a></li>
                </nav>
            </header>
        </div>
    )
}