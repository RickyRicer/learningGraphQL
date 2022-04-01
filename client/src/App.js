import { useQuery } from '@apollo/client';
import {  Routes, Route } from 'react-router-dom';
import { Login } from './Login';
import { FETCH_TODOS } from './graphql/queries/fetchTodos';

function App() {

  const {data, loading, error} = useQuery(FETCH_TODOS);

  if (error) {
    return <h1>{error}</h1>;
  }


  return loading ?
    <h1>Loading......</h1>
    :
    <div>
      <Routes>
        <Route
          path='/'
          component={<Login/>}
        />
      </Routes>
    </div>
}

export default App;