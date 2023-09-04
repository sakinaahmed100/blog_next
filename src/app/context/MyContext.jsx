"use client"
const { useContext, useReducer, useEffect } = require("react");
const { createContext } = require("react");
import MyReducer from "../reducer/MyReducer"
import { auth, db } from "../firebase.config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation'
import { ref, set, child, get,push } from "firebase/database";


const MyContext = createContext();
const initialState = {
  full_name: "",
  phone: "",
  email: "",
  password: "",
  uid: "",
  blog: "",
  info: {},
  blogArray: [],
  toDisplayBlog:{},
  dataArray:[],
  word_limit:false,
  signin:false,
  all_blogs:true,
  write_blogs:false,
}
const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MyReducer, initialState)
  const router = useRouter()


  const map = async (uid) => {
    const dbRef = ref(db);
    await get(child(dbRef, `user/${uid}`)).then((snapshot) => {
      console.log(uid);
      if (snapshot.exists()) {

        dispatch({ type:"MAP", payload: snapshot.val() })
        console.log("map chal rahaa  aur data coming");
         
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  const fetchBlogData = async () => {
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, 'user/blogs'));
      
      if (snapshot.exists()) {
        const blogData = snapshot.val();
        console.log("fetchDataChal Raha, BlogData",blogData);
        snapshot.forEach((childSnapshot) => {
          const blogKey = childSnapshot.key;
        dispatch({ type: "FETCH_BLOG_DATA", payload: blogData });

          dispatch({type:"DISPLAY_DATA", payload:blogKey})
  
          // Process and display the 'blogData' as needed
          console.log("Blog Key:", blogKey);
        });
        // return blogData;
      } else {
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({type:"TOGGLE_SIGNUP_BTN_TRUE"})
        const uid = user.uid
        dispatch({ type: "SET_UID", payload: uid });
        map(uid).then(() => {
          fetchBlogData()
          

        });
        router.push('/');

        // User is signed in
      } else {
        dispatch({type:"TOGGLE_SIGNUP_BTN"})
        fetchBlogData()

      }
    });
    return () => {
      unsubscribe();
    };
  }, []);


  const getValue = (e) => {
    let { name, value } = e.target
    if(state.signin){
      dispatch({ type: "GET_VALUE", payload: { name, value } })
    }
  }

  const getValueSignIn = (e) => {
    let { name, value } = e.target
    dispatch({ type: "GET_VALUE_SIGNIN", payload: { name, value } })
  }
  const SignUp = async () => {
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        const userUid = userCredential.user.uid;

        writeUserData(userUid, state.full_name, state.email, state.password, state.phone)
        router.push('/signin');
        console.log("success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

      });
  }

  const SignIn = () => {

    signInWithEmailAndPassword(auth, state.info.email, state.info.password)
      .then((userCredential) => {

        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  const Logout = () => {
    signOut(auth).then(() => {
      router.push('/signin');

    }).catch((error) => {
      // An error happened.
    });
  }

  function writeUserData(uid, name, email, password, phone) {
    set(ref(db, 'user/' + uid), {
      full_name: name,
      email: email,
      password: password,
      phone: phone,

    });
  }

  const writeBlogDataToDatabase = async (newBlogArray) => {
    try {
      await push(ref(db, 'user/blogs'), {
        post: newBlogArray,
      });
      console.log("Blog data successfully written to the database");
    } catch (error) {
      console.error("An error occurred while writing blog data:", error);
    }
  };


  const PostBlog = async () => {
    if(state.blog.length < 150){
      dispatch({ type: 'TOGGLE_WORD_LIMIT' })
      state.word_limit=true
      console.log(state.word_limit);
    }
    if (state.blog.length > 150 && state.blog.length < 1500) {
      state.word_limit=false;
      console.log(state.word_limit);

      const da=new Date()
      const options = {
        year: "2-digit", // Display 2-digit year
        month: "2-digit", // Display 2-digit month
        day: "2-digit", // Display 2-digit day
      };
      const hours = da.getHours();
      const minutes = da.getMinutes();
      const seconds = da.getSeconds();
      
      // Format the time as a string with leading zeros if needed
      const currentTimeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      
      
      const formattedDate = da.toLocaleDateString(undefined, options);
      console.log(formattedDate);
      console.log(currentTimeString);
      try {
        const newBlog = {
          content: state.blog,
          date: formattedDate,
          time:currentTimeString,
          name: state.snapshot.full_name,
          email: state.snapshot.email,
          phone: state.snapshot.phone,
          uid: state.uid,
        };
console.log(newBlog,newBlog.date);
        writeBlogDataToDatabase(newBlog).then(()=>{
          fetchBlogData()

        });

        
        console.log("Blog posted successfully");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
    
  };

  const All_Blogs=()=>{
dispatch({type:"ALL_BLOGS"})
  }
  const Write_Blogs=()=>{
dispatch({type:"WRITE_BLOGS"})
  }

  return (<MyContext.Provider value={{ state,getValue, SignUp, getValueSignIn, SignIn,  Logout,PostBlog,All_Blogs,Write_Blogs}}>{children}</MyContext.Provider>)
}
const UseMyContext = () => {
  return useContext(MyContext)
}

export { MyContextProvider, UseMyContext }