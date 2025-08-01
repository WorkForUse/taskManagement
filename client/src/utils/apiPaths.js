export const BASE_URL = "http://localhost:8000/api";

// utils/apiPaths.js
export const API_PATHS = {
    AUTH: {
        REGISTER: "/auth/register", // Register a new user (Admin or Member)
        LOGIN: "/auth/login", // Authenticate user & return JWT token
        GET_PROFILE: "/auth/profile", // Get logged-in-user details
    },

    USERS: {
        GET_ALL_USERS: "/users", // Get all users Admin
        GET_USER_BY_ID: (userId) => `/users/${userId}`, // Get user by ID
        CREATE_USER: "/users", // Create a new user Admin
        UPDATE_USER: (userId) => `/users/${userId}`, // Update user details
        DELETE_USER: (userId) => `/users/${userId}`, // Delete a user
    },

    TASKS: {
        GET_DASHBOARD_DATA: "/tasks/dashboard-data",
        GET_USER_DASHBOARD_DATA: "/tasks/user-dashboard-data",
        GET_ALL_TASKS: "/tasks",
        GET_TASKS_BY_ID: (taskId) => `/tasks/${taskId}`,
        CREATE_TASK: "/tasks",
        UPDATE_TASK: (taskId) => `/tasks/${taskId}`,
        DELETE_TASK: (taskId) => `/tasks/${taskId}`,

        UPDATE_TASK_STATUS: (taskId) => `/tasks/${taskId}/status`,
        UPDATE_TODO_CHECKLIST: (taskId) => `/tasks/${taskId}/todo`,
    },

    REPORTS: {
        EXPORT_TASKS: "/reports/export/tasks",
        EXPORT_USERS: "/reports/export/users",
    },
    
    IMAGE: {
        UPLOAD_IMAGE: "/auth/upload-image",
    },
};