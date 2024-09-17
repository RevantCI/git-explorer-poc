import { useState, useEffect } from "react";
import { fetchIssues } from "../api";
const Issue = ({issue}) => {
    const {repoName, owner} = issue
    const [issues, setIssues] = useState([]);
    const [issueState, setIssueState] = useState('open')
    useEffect(() => {
        async function getIssues() {
          try {
            const issuesData = await fetchIssues(owner, repoName, issueState);
            setIssues(issuesData);
          } catch (error) {
            console.error('Failed to fetch issues', error);
          }
        }
        getIssues();
      }, [repoName, owner, issueState]);
    return (
        <div className="issues py-20 bg-gray-200 text-center">
          <h2 className="text-3xl font-bold mb-8">Issues of {repoName}</h2>
          <button onClick={() => setIssueState(issueState === 'open' ? 'closed' : 'open')}>
            {issueState === 'open' ? 'Show Closed Issues' : 'Show Open Issues'}
          </button>
          <ol className="list-decimal">
          {issues.map((issue) => (
            <li key={issue.id} className="text-lg">
                <h3>{issue.title}</h3>
            </li>
          ))}
            {/* <li className="text-lg">Issue 1</li>
            <li className="text-lg">Issue 2</li>
            <li className="text-lg">Issue 3</li> */}
          </ol>
        </div>
    )
}

export default Issue;