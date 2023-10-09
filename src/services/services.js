class FetchServices {
    static async getService() {
        const response = await fetch('https://tasks.googleapis.com/tasks/v1/lists/{tasklist}/tasks')
        const data = await response.json();
        return data

    }
    static async postService() { }
    static async editService() { }
    static async deleteService() { }


}

console.log(FetchServices.getService());
//AIzaSyB5xyCCo36EUUO6rmjAUPev81gtOAPH_lM
export default FetchServices