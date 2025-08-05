import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: [],
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        addProject: (state, action) => {
            state.projects.unshift(action.payload);
        },
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        clearProjects: (state) => {
            state.projects = [];
        },
    },
});

export const { addProject, setProjects, clearProjects } = projectSlice.actions;
export default projectSlice.reducer; 