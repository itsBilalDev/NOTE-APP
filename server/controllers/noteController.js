import Note from "../models/note.js"

//create notes

export const createNotes=async(req,res)=>{
    try{
        let note=await Note.create(req.body);
        res.status(201).json(note);
    }catch(error){
        res.status(500).json(error)
    }
}

//get note

export const  getNotes=async(req,res)=>{
    try{
      const note=await Note.find();
     
         res.status(200).json(note)
    }catch(error){
          res.status(500).json(error);
    }
}

//delete notes

export const deleteNotes=async(req,res)=>{
    try{
      const notes=await Note.findByIdAndDelete(req.params.id);
      if(!notes){
       return  res.status(404).json({
            message:"note not present",
        })
      }
      res.status(200).json({
        message: "note deleted succcessfully"
      })
    }catch(error){
        res.status(500).json(error)
    }
}


//edit notes
export const updateNote=async(req,res)=>{
          try{
 const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, content: req.body.content },
      { new: true }
    );
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}