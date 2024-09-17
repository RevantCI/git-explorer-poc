import axios from 'axios';
// import { headers } from 'next/headers';

const API_URL = 'http://localhost:3000/api/v1';
const TOKEN = 'cd584a0901794996106ee5b109ce2bad08fb6d57';

// Fetch repositories
export const fetchRepositories = async () => {
  try {
    const response = await axios.get(`${API_URL}/repos/search`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `token ${TOKEN}`,
      },
    });
    print("repository response", response)
    return response.data.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};

// Fetch repository details
export const fetchRepositoryDetails = async (owner, repoName) => {
  try {
    const response = await axios.get(`${API_URL}/repos/${owner}/${repoName}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repository details:', error);
    throw error;
  }
};

// Fetch issues for a repository
export const fetchIssues = async (owner, repoName, state = 'open') => {
  try {
    const response = await axios.get(`${API_URL}/repos/${owner}/${repoName}/issues?state=${state}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `token ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching issues:', error);
    throw error;
  }
};

// Fetch an issue detail
export const FetchIssueDetail = async (owner, repoName , index) => {
    try {
        const response = await axios.get(`${API_URL}/repos/${owner}/${repoName}/issues/${index}`, {
            headers: {
                Authorization: `token ${TOKEN}`,
            },
        });
        return response.data;
    } catch(error){
        console.error('Error fetching issues:', error);
        throw error;
    }
};
