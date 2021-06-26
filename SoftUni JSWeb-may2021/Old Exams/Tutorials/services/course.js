const Course = require('../models/Course');



async function getAllCourses(hasUser, query) {
    let sort = { createdAt: 1 };

    if (!hasUser) {
        sort = { usersEnrolled: -1 }
    }

    let courses = await Course.find({}).sort(sort).lean();
    
    if (query.search) {
        courses = courses.filter(c => c.title.toLowerCase().includes(query.search.toLowerCase()));
    }

    return courses;
}

async function getCourseById(id) {
    return Course.findById(id).populate('usersEnrolled').lean();
}

async function createCourse(courseData) {
    const pattern = new RegExp(`^${courseData.title}$`, 'i');
    const existing = await Course.findOne({ title: { $regex: pattern } });

    if (existing) {
        throw new Error('A course with this name already exists.');
    }
    const course = new Course(courseData);

    await course.save();

    return course;
}

async function editCourse(id, courseData) {
    const course = await Course.findById(id);

    course.title = courseData.title;
    course.description = courseData.description;
    course.imageUrl = courseData.imageUrl;
    course.duration = courseData.duration;

    return await course.save();
}

async function deleteCourse(id) {
    return Course.findByIdAndDelete(id);
}

async function enrollCourse(courseId, userId) {
    const course = await Course.findById(courseId);

    course.usersEnrolled.push(userId);

    return course.save();
}


module.exports = {
    getAllCourses,
    createCourse,
    getCourseById,
    editCourse,
    deleteCourse,
    enrollCourse
}