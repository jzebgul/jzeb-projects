import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';



const Menu = () => {
    return(
    <ListGroup>
        <ListGroupItem>
        <Link  tag='a' to='/' action>
            Home
        </Link>
        </ListGroupItem>

        <ListGroupItem>
        <Link  tag='a' to='/add-courses' action>
            Add Course
        </Link>
        </ListGroupItem>

        <ListGroupItem>
        <Link  tag='a' to='/view-courses' action>
            View Course
        </Link>
        </ListGroupItem>

        <ListGroupItem>
        <Link  tag='a' to='#!' action>
           About Us
        </Link>
        </ListGroupItem>

<ListGroupItem>
        <Link  tag='a' to='#!' action>
           Contact
        </Link>
        </ListGroupItem>
    </ListGroup>
    );
};
export default Menu;