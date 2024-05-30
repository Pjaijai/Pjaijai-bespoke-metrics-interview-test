import axios from "axios"

const BASE_API_END_POINT = "http://localhost:4444"
const MEMBERS_API_END_POINT = `${BASE_API_END_POINT}/members`
const getMembers = async (name) => {
  try {
    let endpoint = MEMBERS_API_END_POINT
    if (typeof name === "string" && name.length > 0) {
      endpoint = `${endpoint}?query=${name}`
    }

    const res = await axios.get(endpoint)

    return res.data
  } catch (err) {
    console.log("Get member ERROR", err)
  }
}

const createMember = async (data) => {
  try {
    const res = await axios.post(MEMBERS_API_END_POINT, { body: data })

    return res.data
  } catch (err) {
    console.log("Create member ERROR", err)
  }
}

const editMember = async (data, memberId) => {
  try {
    const res = await axios.patch(`${MEMBERS_API_END_POINT}/${memberId}`, {
      body: data,
    })

    return res.data
  } catch (err) {
    console.log("Edit member ERROR", err)
  }
}

export { getMembers, createMember, editMember }
