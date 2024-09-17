const Repository = ({repositories, setIssue }) => {
    console.log(repositories)
    function handleRepo(owner, name){
        setIssue({
            repoName: name,
            owner
        });
    }

    return (
        <div className="repositories py-20 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-8">Repositories</h2>
            <ol className="list-decimal">
                {repositories.map((repo) => (
                    <li 
                        key={repo.id} 
                        onClick={() => handleRepo(repo.owner.username, repo.name)} // Corrected onClick
                        className="cursor-pointer"
                    >
                        {repo.full_name}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Repository;
