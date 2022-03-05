interface NavBarProps {
    title: string;
}

export const NavBar = ({ title }: NavBarProps) => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
                    {title}
                </a>
            </nav>
        </div>
    );
};
