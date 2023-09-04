export default function MyReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_SIGNUP_BTN_TRUE": {
            return {
                ...state,
                signin:true


            }
        }

        case "TOGGLE_SIGNUP_BTN": {
            return {
                ...state,
                signin:false

            }
        }
        case "GET_VALUE":
            {
                let { name, value } = action.payload
                return {
                    ...state,
                    [name]: value,
                    word_limit: false,
                }
            }
        case "GET_VALUE_SIGNIN": {
            let { name, value } = action.payload
            console.log(state.info);
            return {
                ...state,
                info: {
                    ...state.info,
                    [name]: value
                }
            }
        }

        case "SET_UID": {
            const uid = action.payload
            return {
                ...state,
                uid: uid
            }
        }
        case "MAP": {
            const snapshot = action.payload
            console.log(snapshot);
            return {
                ...state,
                snapshot: snapshot,

            }
        }

        case "FETCH_BLOG_DATA": {
            console.log(action.payload);
            state.toDisplayBlog={}

            return {
                ...state,
                toDisplayBlog: action.payload,
                blog: "",
            };
        }

case "EMPTY_ARRAY":{
    console.log("hittttt");
    return{
        ...state,
       displayArray:[],
       dataArray:[],
       toDisplayBlog:{},

    }
}
        case "DISPLAY_DATA": {
            const key = action.payload
            const data = state.toDisplayBlog
            console.log("Original Key:", key);
            console.log("Data Object:", data);
            if (data.hasOwnProperty(key)) {
                const specificData = data[key];

                if (specificData.hasOwnProperty("post")) {
                    const postData = specificData.post;

                    // Create an object that represents the data for this key
                    const dataWithKey = { key: key, data: postData };
                    state.dataArray.push(dataWithKey);
                    console.log(state.dataArray);
                } else {
                    console.log("Key found, but 'post' object not found within it.");
                }
            } else {
                console.log("Key not found.");
            }
console.log(state.displayArray)
console.log(state.dataArray)
            return {
                ...state,
                displayArray: state.dataArray
            }
        }

        case 'TOGGLE_WORD_LIMIT': {
            return {
                ...state,
                word_limit: true
            }
        }

        case "ALL_BLOGS":{
            return{
                ...state,
                all_blogs:true,
                write_blogs:false,
            }
        }

        case "WRITE_BLOGS":{
            return{
                ...state,
                all_blogs:false,
                write_blogs:true,
            }
        }

        default:
            break;
    }
}