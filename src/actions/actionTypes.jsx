export const act_add = (job) => {
    return {
        type: 'add',
        payload: job,
    }
}

// them ham ben todolish xong qua day
export const act_delete = (id) => {
    return {
        type: 'delete',
        payload: id,
    }
}

export const act_checked = (id) => {
    return {
        type: 'checked',
        payload: id,
    }
}
