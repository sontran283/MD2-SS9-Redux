const initialState = JSON.parse(localStorage.getItem("jobs")) || []

export const todolish = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            //  clone lai mang cu
            const newArray = [...state];
            //  push du lieu vao mang
            newArray.push(action.payload);
            //  luu du lieu len local
            localStorage.setItem("jobs", JSON.stringify(newArray));
            //  return mang moi
            return newArray;

        case "delete":
            //  clone lai mang cu
            const updateJob = [...state];
            //  loc ra nhung id can xoa
            const newLishJob = updateJob.filter(job => job.id != action.payload);
            //  luu du lieu len local
            localStorage.setItem("jobs", JSON.stringify(newLishJob));
            //  return mang moi
            return newLishJob;

        case "checkked":
            //  clone lai mang cu
            const newLishJobCheck = [...state]

            const checkedJob = newLishJobCheck.map((job) => {
                if (job.id === action.payload) {
                    return {
                        ...job,
                        status: !job.status
                    }
                }
                return job;
            })
            //  luu du lieu len local
            localStorage.setItem("jobs", JSON.stringify(checkedJob));
            //  return mang moi
            return checkedJob

        default:
            return state;
    }
}
