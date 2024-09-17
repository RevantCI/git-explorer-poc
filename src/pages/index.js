import { useState, useEffect } from "react";
import Issue from "../components/Issue";
import Repository from "../components/Repository";
import { fetchRepositories } from "../api";

const Homepage = () => {
    const [issue, setIssue] = useState({name: "", owner: "" });
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        async function getRepositories() {
          try {
            const repos = await fetchRepositories();
            setRepositories(repos);
          } catch (error) {
            console.error('Failed to fetch repositories', error);
          }
        }
        getRepositories();
      }, []);
    const handleScroll = (section) => {
      document.querySelector(section).scrollIntoView({
        behavior: 'smooth',
      });
    };
  
    return (
      <>
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-center space-x-8 text-white">
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={() => handleScroll('.header')}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={() => handleScroll('.repositories')}
            >
              Repositories
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={() => handleScroll('.issues')}
            >
              Issues
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={() => handleScroll('.about')}
            >
              About
            </li>
          </ul>
        </nav>
  
        <div className="header py-20 bg-blue-500 text-white text-center">
          <h1 className="text-4xl font-bold">Gitea: Git with a cup of tea</h1>
          <h3 className="text-2xl mt-4">A painless, self-hosted Git service</h3>
        </div>

        <Repository repositories={repositories} setIssue={setIssue}/>
        <Issue issue={issue}/>
  
        <div className="about py-20 bg-gray-300 text-center">
          <h2 className="text-3xl font-bold mb-4">About Gitea</h2>
          <p className="text-lg">Some gitea descriptions</p>
        </div>
      </>
    );
  };
  
  export default Homepage;
  