// src/App.tsx
import AppRoutes from './Routes';

const App = () => {

  let a=[1,2,3,4,5,6]

  for(let i=0;i<=a.length;i++){
    console.log(a[i])
  }

  let i=20

  while (i<10) {
    console.log(i)
    i=i-1
  }

  for(let i of a){
    console.log(i)
  }

  return <AppRoutes />;
};

export default App;
