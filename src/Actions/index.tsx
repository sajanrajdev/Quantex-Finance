export const changeDeadline = (store: any, event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value==''){
            const deadline = ''
            store.setState( {deadline} );
        }
        else{
            const deadline = parseFloat(event.target.value).toFixed(0);
            store.setState( {deadline} );
        }
  };