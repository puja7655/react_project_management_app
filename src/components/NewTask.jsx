import { useState } from "react"

export default function NewTask({onAdd}) {

    const [enteredTask, setEnteredTask] = useState('')

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handleAddTask(){
        //this is added to prevent from adding empty tak in the tasklist
        if(enteredTask.trim()===''){
            return
        }
        onAdd(enteredTask)
        setEnteredTask('')
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                value={enteredTask}
                onChange={handleChange} />
            <button 
            className="text-stone-700 hover:text-stone-950"
            onClick={handleAddTask}>Add Task</button>
        </div>
    )
}