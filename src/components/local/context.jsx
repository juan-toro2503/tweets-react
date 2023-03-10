import React from 'react';

const Context=React.createContext();
function Provider(props){
    //valor texte area
    const [textArea,setTextArea]=React.useState("");
    const [textAreaValue,setTextAreaValue]=React.useState("");


    //array tweets
    const [tweets,setTweets] = React.useState([])
    

    //mostrar tweet
    const [tweetValue,setTweetValue]=React.useState("");

    

    const saveTweets=()=>{
        
        if(!localStorage.getItem("archived")){
            localStorage.setItem("archived",JSON.stringify([]))

        }else{
            if(tweetValue==""){
                alert("please public a tweet")

            }else{
                let arrayLocal=localStorage.getItem("archived");
                let array=JSON.parse(arrayLocal);
                array.push(tweetValue);
                localStorage.setItem("archived",JSON.stringify(array));
                setTweetValue("");
            }
           
        }
        

        
    }
    if(!localStorage.getItem("archived")){
        localStorage.setItem("archived",JSON.stringify([]))
    }else{
        var tweetsArray=JSON.parse(localStorage.getItem("archived"))
        
    }
    
    const getTweets=()=>{
        
        setTweets(tweetsArray)
        
        
      
    }
    const deleteTweet=(event)=>{  
        setTweets(tweets.splice(event.target.id,1))
        localStorage.setItem("archived",JSON.stringify(tweets))
        if(tweets.length==0){
            setTweets([])
        }


        
        
        
    }

    return(
    <Context.Provider value={{
        textArea,setTextArea,tweets,setTweets,tweetValue,setTweetValue,textAreaValue,setTextAreaValue,saveTweets,getTweets,deleteTweet

      

        }}>
            {props.children}

           
        </Context.Provider>
    )
}
<Context.Consumer></Context.Consumer>

export {Provider,Context};