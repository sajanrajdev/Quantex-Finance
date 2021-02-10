export const changeDeadline = (store: any, event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value==''){
            store.setState( {deadline: ''} );
        }
        else{
            store.setState( {deadline: parseFloat(event.target.value).toFixed(0)} );
        }
  };

  export const changeTolerance = (store: any, value: number) => {
      console.log(value)
    store.setState( {tolerance: value} );
};