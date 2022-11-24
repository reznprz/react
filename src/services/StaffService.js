import axios from 'axios';

const STAFF_API = "http://localhost:8080/api/v1/staff/allStaffs";
const STAFF_POST_API = "http://localhost:8080/api/v1/staff/create";
const STAFF_GET_BY_ID_API = "http://localhost:8080/api/v1/staff";

class StaffService {

    getEmployees(){
        return axios.get(STAFF_API);
    }

    createStaff(staff){
        return axios.post(STAFF_POST_API, staff);

    }

    getStaffById(id){
        return axios.get(STAFF_GET_BY_ID_API + '/' + id);
    }

    updateStaff(staffUpdate, staffId){
        return axios.put(STAFF_GET_BY_ID_API + '/' + staffId, staffUpdate);

    }

    deleteStaffById(id){
        return axios.delete(STAFF_GET_BY_ID_API + '/' + id);
    }

}


export default new StaffService()