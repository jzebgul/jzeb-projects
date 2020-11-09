import React, {useEffect} from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector} from 'react-redux';


const Home = () => {
  useEffect(()=>{
    document.title= "Home"
},[])
    const notify = () => toast.success("You Have Started the APP!");
    const newLocal = useSelector(state => state.auth.user.displayName);
    
  return (
    <div>
      <Jumbotron className= "text-center bg-primary" >
  <h1 >Wellcome!  <span> {newLocal} </span></h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
            <Container>
                <Button onClick={notify} out color="warning text-white" size="lg" block outline>Start App</Button>
                <ToastContainer />
            </Container>
          
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;