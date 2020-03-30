exports.ERROR = {
    INVALID_TOKEN : {
        statusCode    : 402,
        customMessage : 'Your access has expired. Please login again.',
        type          : 'INVALID_TOKEN'
    },
    DEFAULT : {
        statusCode    : 501,
        customMessage : 'Something went wrong.',
        type          : 'DEFAULT'
    },
    NO_APP_FOUND : {
        statusCode    : 201,
        customMessage : 'No Apps Found.',
        type          : 'NO_APP_FOUND'
    },
    USER_NOT_FOUND  : {
        statusCode    : 201,
        customMessage : 'This account is not registered with us.',
        type          : 'USER_NOT_FOUND'
    },
    USER_INACTIVE  : {
        statusCode    : 402,
        customMessage : 'This User account is deactivated by admin.',
        type          : 'USER_INACTIVE'
    },
    INVALID_COUNTRY_ID : {
        statusCode    : 403,
        customMessage : 'Country not found.',
        type          : 'INVALID_COUNTRY_ID'
    },
    EMAIL_NOT_VERIFIED  : {
        statusCode    : 201,
        customMessage : 'Please verify your email first.',
        type          : 'EMAIL_NOT_VERIFIED'
    },
    INVALID_ANSWERS : {
        statusCode    : 403,
        customMessage : 'Invalid answers.',
        type          : 'INVALID_ANSWERS'
    },
    INVALID_LANGUAGE : {
        statusCode    : 403,
        customMessage : 'Default language not found.',
        type          : 'INVALID_LANGUAGE'
    },
    INVALID_RECOMMENDATION_ID : {
        statusCode    : 403,
        customMessage : 'Recommendation id not found.',
        type          : 'INVALID_RECOMMENDATION_ID'
    },
    OPPONENT_NOT_FOUND  : {
        statusCode    : 201,
        customMessage : 'No opponent available for this organization.',
        type          : 'OPPONENT_NOT_FOUND'
    },
};

exports.SUCCESS = {
    DEFAULT : {
        statusCode    : 200,
        customMessage : 'Success',
        type          : 'DEFAULT'
    },
    LOGOUT : {
        statusCode    : 200,
        customMessage : 'Logged out successfully',
        type          : 'LOGOUT'
    },
    FEEDBACK_SUBMITTED_SUCCESSFULLY : {
        statusCode    : 200,
        customMessage : 'Your feedback has been submitted successfully.',
        type          : 'FEEDBACK_SUBMITTED_SUCCESSFULLY'
    },
};

exports.LANGUAGE_SUCCESS = {
    en :{
        DEFAULT : {
            statusCode    : 200,
            customMessage : 'Success',
            type          : 'DEFAULT'
        },
        LOGOUT : {
            statusCode    : 200,
            customMessage : 'Logged out successfully',
            type          : 'LOGOUT'
        },
        FEEDBACK_SUBMITTED_SUCCESSFULLY : {
            statusCode    : 200,
            customMessage : 'Your feedback has been submitted successfully.',
            type          : 'FEEDBACK_SUBMITTED_SUCCESSFULLY'
        },
        ANSWER_SUBMITTED : {
            statusCode    : 200,
            customMessage : 'Your answer submitted successfully',
            type          : 'ANSWER_SUBMITTED'
        },
        REMINDER_SENT : {
            statusCode    : 200,
            customMessage : 'Reminder sent successfully',
            type          : 'REMINDER_SENT'
        },
    },
}

exports.LANGUAGE_ERROR = {
    en :{
        DEFAULT : {
            statusCode    : 501,
            customMessage : 'Something went wrong.',
            type          : 'DEFAULT'
        },
        GAME_ID_NOT_FOUND : {
            statusCode    : 201,
            customMessage : 'Game not found.',
            type          : 'GAME_ID_NOT_FOUND'
        },
        UNAUTHORIZED_ACCESS : {
            statusCode    : 201,
            customMessage : 'unauthorized access.',
            type          : 'UNAUTHORIZED_ACCESS'
        },
        INVALID_GAME_MODE_TYPE : {
            statusCode    : 201,
            customMessage : 'Invalid game mode type.',
            type          : 'INVALID_GAME_MODE_TYPE'
        },
        INVALID_COURSE_ID : {
            statusCode    : 201,
            customMessage : 'Invalid course, no module found.',
            type          : 'INVALID_COURSE_ID'
        },
    },
}
