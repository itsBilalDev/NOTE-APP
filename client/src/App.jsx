import { useState , useEffect } from "react"
import API from "../services/api"
import "./App.css"

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const  [darkMood,setDarkMood]=useState(false);
  const [ search, setSearch ]=useState("");
  const [editingID, setEditingID]=useState("");
const[category,setCategory]=useState("Personal")
  //search filter
  const filteredNotes=notes.filter((note)=>{
    return(     
      note.title.toLowerCase().includes(search.toLowerCase()) ||
     note.content.toLowerCase().includes(search.toLowerCase())
    )
         
    
  })
   //fetch notes 
  const fetchNotes = async () => {
    const response = await API.get("/api/notes");
     console.log(response.data);
    setNotes(response.data);
  };
 
       useEffect(() => { 
    fetchNotes();
  }, []);
 
  
 
   //add notes
  const addNotes = async () => {
    await API.post("/api/notes", {
      title,
      content,
      category
    });

    setTitle("");
    setContent("");
    fetchNotes();
  };


  //delete notes
  const deleteNotes = async (id) => {
    const confirmdelete=window.confirm("Are u sure?");
    if(!confirmdelete){
      return;
    }
    await API.delete(`/api/notes/${id}`);
    fetchNotes();
  };

  //editing notes

  const updateNote = async () => {
  try {
    const res = await API.put(`/api/notes/${editingID}`, {
      title,
      content,
      category
    });
    console.log("update response:", res.data);
    setEditingID("");
    setTitle("");
    setContent("");
    setcategory("");
    fetchNotes();
  } catch (err) {
    console.error("Update failed:", err.response?.data || err.message);
  }
};
  return (
    <>

    <div className={darkMood? "dark-container" : "light-container"}>
           <div className="heading">
      
      <h1>NOTES APP</h1>
     <input type="text" placeholder="Search--" value={search}
     onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={()=>setDarkMood(!darkMood)}>
        {darkMood ? "Light mode" : "Dark Mode"}
        </button>
      </div>

      <input className={darkMood ? "dark-input" : "light-input"}
        value={title}
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea className={darkMood ? "dark-input" : "light-input"}
        value={content}
        placeholder="Enter Content"
        onChange={(e) => setContent(e.target.value)}
      />

      <select className={darkMood ? "dark-input": "light-input"}placeholder="choose category" onChange={(e)=>{setCategory(e.target.value)}}>
         <option >Study</option>
         <option>WORK</option>
         <option >Important</option>
         <option >Personal</option>
         
      </select>

    {
           editingID ? (
        <button className="add-notes-button" onClick={updateNote}>UPDATE NOTE</button> ): (
          <button  className=" add-notes-button" onClick={addNotes}>ADD NOTE</button>

        )
    }
    
     
     <div className="notes-grid">
  
      {

        filteredNotes.length===0?(
          <h2>"NO NOTES FOUNDS"</h2>
        ) :
        filteredNotes.map((note)=>(
        <div key={note._id}  className="ADD-NOTES">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          {
          <div className="date">
            <p>Created: {new Date(note.createdAt).toLocaleDateString()}</p>
          </div>
          }
           
           
    
          <div className="btn-flex">
             <button onClick={() => {
    setEditingID(note._id);
    setTitle(note.title);
    setContent(note.content);
  }}>EDIT</button>
            <button onClick={() => deleteNotes(note._id)}>
            DELETE NOTE
          </button>
          </div>
          
          
        </div>
        ))
      }   
     
     
  
     </div>
    </div>
    </>
  );
}

export default App;