import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Ticket from './Ticket';

const Home = () => {

    const [tickets, setTickets] = useState([])
    const [users, setUsers] = useState([])


    useEffect(() => {
        const api = async () => {
            const res = await axios.get("https://apimocha.com/quicksell/data")
            setUsers(res.data.users)
            setTickets(res.data.tickets)
        }
        api();
    }, []);


    const inProgressTickets = tickets.filter(ticket => ticket.status === "In progress");
    const Todo = tickets.filter(ticket => ticket.status === "Todo");
    const Backlog = tickets.filter(ticket => ticket.status === "Backlog");

    return (
        <Fragment>
        <div className='Home'>
            <div className='component-1'>
                <select >
                    <option value="">Display</option>
                    <option value="">Status</option>
                    <option value="">Priority</option>
                    {/* {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
            ))} */}
                </select>
            </div>
            <div className='component-2'>
                <div>
                    {
                        Backlog.map((i) => (
                            <Ticket key={i.id} id={i.id} title={i.title} tag={i.tag} />
                        ))
                    }
                </div>
                <div>
                    {
                        Todo.map((i) => (
                            <Ticket key={i.id} id={i.id} title={i.title} tag={i.tag} />
                        ))
                    }
                </div>
                <div>
                    {
                        inProgressTickets.map((i) => (
                            <Ticket key={i.id} id={i.id} title={i.title} tag={i.tag} />
                        ))
                    }
                </div>


            </div>
        </div>
        </Fragment>
    );
};

export default Home;