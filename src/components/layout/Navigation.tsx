interface NavigationProps {
    nextPage: string | undefined;
    previousPage: string | undefined;
    updateUrl: (url: string) => void;
}

export const Navigation = ({
    nextPage,
    previousPage,
    updateUrl
}: NavigationProps) => {
    return (
        <nav>
            <ul className="pagination justify-content-end">
                {previousPage && (
                    <li className="page-item">
                        <a
                            onClick={() => {
                                updateUrl(previousPage);
                            }}
                            className="page-link"
                            href="#"
                        >
                            Previous
                        </a>
                    </li>
                )}

                {nextPage && (
                    <li className="page-item">
                        <a
                            onClick={() => {
                                updateUrl(nextPage);
                            }}
                            className="page-link"
                            href="#"
                        >
                            Next
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
};
