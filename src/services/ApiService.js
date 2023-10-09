class ApiService {
    constructor(){
        this.apiKey = 'AIzaSyB5xyCCo36EUUO6rmjAUPev81gtOAPH_lM';
        this.baseUrl = 'https://tasks.googleapis.com/tasks/v1/lists/@default';
    }

    async createTask(taskId, title){
        const url = `${this.baseUrl}/tasks?key=${this.apiKey}`
        const task = { id: taskId, title }

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
            if (!res.ok) {
                throw new Error(`faild to create task: ${res.statusText}`)
              }
              return await res.json()
            
        } catch (error) {
            console.log("Error creating task:", error);
      throw error;
        }
    }


    async updateTask(taskId, title){
        const url = `${this.baseUrl}/tasks/{task}?key=${this.apiKey}`
        const task = { id: taskId, title }

        try {
            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
            if (!res.ok) {
                throw new Error(`faild to update task: ${res.statusText}`)
              }
              return await res.json()
            
        } catch (error) {
            console.log("Error updating task:", error);
      throw error;
        }
    }


     async getTask(taskId, title){
        const url = `${this.baseUrl}/tasks/{task}?key=${this.apiKey}`
        const task = { id: taskId, title }

        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
            if (!res.ok) {
                throw new Error(`faild to get task: ${res.statusText}`)
              }
              return await res.json()
            
        } catch (error) {
            console.log("Error get task:", error);
      throw error;
        }
    }


    async deleteTask(taskId, title){
        const url = `${this.baseUrl}/tasks/{task}?key=${this.apiKey}`
        const task = { id: taskId, title }

        try {
            const res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
            if (!res.ok) {
                throw new Error(`faild to delete task: ${res.statusText}`)
              }
              return await res.json()
            
        } catch (error) {
            console.log("Error delete task:", error);
      throw error;
        }
    }




}


//
export default ApiService