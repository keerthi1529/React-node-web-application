import React, { useState, useEffect } from 'react';
import './App.css';
import Item from './item';

function App() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchUsers() {
            try {
                //const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const response = await fetch('http://localhost:5000/api/users');
               if (response.ok) {
                    const data = await response.json(); // Await the JSON parsing
                    setUsers(data);
                    console.log("Data retrieved successfully")
                    console.log(data)
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                setError('Failed to fetch user data');
            }
        }

        fetchUsers();
    }, []);
    
    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        console.log(term)
        setSearchTerm(term);
        setCurrentPage(1);
        console.log(filteredUsers)
    };
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
    );
    const totalItems = filteredUsers.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
    const indexOfLastItem = indexOfFirstItem + itemsPerPage;  
    const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);;
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

     const renderPagination = () => {
           const paginationButtons = [];
            paginationButtons.push(
                <button key="prev" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    &laquo;
                </button>
            );
        for (let i = 1; i <= totalPages; i++) {
            paginationButtons.push(
                <button key={i} onClick={() => paginate(i)} className={i === currentPage ? 'active' : ''}>
                    {i}
                </button>
            );
        }
            paginationButtons.push(
                <button key="next" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                     &raquo;
                </button>
            );
        return paginationButtons;
     };

    return (
        <div className="App">
            {error && <div className="error">{error}</div>}
            <h1>USERS LIST</h1>
            <div className='main-div'>
                 <input
                     type="text"
                      placeholder="Search by name..."
                      value={searchTerm}
                      onChange={handleSearch}
                   />
                     {currentItems.map(user => (
                       <Item key={user.id} companyname={user.company.name} name={user.name} cityname={user.address.city} website={user.website}
                       username={user.username} email={user.email} street={user.address.street}
                       suite={user.address.suite} zipcode={user.address.zipcode} geo={user.address.geo} 
                       phone={user.phone} catchPhrase={user.company.catchPhrase} bs={user.company.bs}>
                          
                      </Item>
                      ))}
            
             <div className="pagination">
    
               {renderPagination()}
             </div>
            </div>
        </div>
    );
}

export default App;


