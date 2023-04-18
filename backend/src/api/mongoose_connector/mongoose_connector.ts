import mongoose from "mongoose";

/* var f1 = new Faculty({
  name: "Dr S Thalapathiraj",
  facID: "FA22110035",
  dob: new Date(1985, 5, 15),
  netID: "s.thalapathiraj.15@srmist.edu.in",
  mob: "5624525431",
  dept: new mongoose.Types.ObjectId("64133805bfe0c75a252e2d0d"),
  desig: "Assistant Professor",
  password: "thalapathySir",
});
var f2 = new Faculty({
  name: "Dr S Kannan",
  facID: "FA22110031",
  dob: new Date(1989, 7, 14),
  netID: "s.kannan.14@srmist.edu.in",
  mob: "5624525437",
  dept: new mongoose.Types.ObjectId("6413382ebfe0c75a252e2d12"),
  desig: "Assistant Professor",
  password: "kannanSir",
}); */

/* var f1 = new Class({
  classInchargeId: new mongoose.Types.ObjectId("64134546aa804cc8b5d60e25"),
  classCounsellorId: new mongoose.Types.ObjectId("64134546aa804cc8b5d60e24"),
  sec: "A",
  dept: new mongoose.Types.ObjectId("6413374abfe0c75a252e2d09"),
  batch_start: new Date(2022, 8, 15),
  batch_end: new Date(2026, 5, 15),
  students: [],
  timetable: [],
});
var f2 = new Class({
  classCounsellorId: new mongoose.Types.ObjectId("64134546aa804cc8b5d60e25"),
  classInchargeId: new mongoose.Types.ObjectId("64134546aa804cc8b5d60e24"),
  sec: "F",
  dept: new mongoose.Types.ObjectId("6413374abfe0c75a252e2d09"),
  batch_start: new Date(2022, 8, 15),
  batch_end: new Date(2026, 5, 15),
  students: [],
  timetable: [],
}); */

/* var f1 = new Student({
  name: "Naman Bharat Gor",
  password: "tumpehele",
  reg: "RA2211003040118",
  dob: new Date(2004, 6, 28),
  netID: "ng1922@srmist.edu.in",
  mob: "5243657529",
  dept: new mongoose.Types.ObjectId("6413374abfe0c75a252e2d09"),
  sem: 2,
  classId: new mongoose.Types.ObjectId("641443d669d4e86c018aecb9"),
  participatedEventBenefits: [],
});
var f2 = new Student({
  name: "Bhumi Sukeriya",
  password: "naitum",
  reg: "RA2211042040047",
  dob: new Date(2004, 6, 30),
  netID: "bs6297@srmist.edu.in",
  mob: "5243657539",
  dept: new mongoose.Types.ObjectId("6413374abfe0c75a252e2d09"),
  sem: 2,
  classId: new mongoose.Types.ObjectId("641443d669d4e86c018aecba"),
  participatedEventBenefits: [],
}); */

/* const f1 = new EventBenefit({ title: "Programming" });
const f2 = new EventBenefit({ title: "Problem Solving" });
const f3 = new EventBenefit({ title: "Photography" });
const f4 = new EventBenefit({ title: "Communication" });
const f5 = new EventBenefit({ title: "Leadership" }); */

/* const f1 = new Notice({
  title: "Annual Day Competition",
  subtitle: "to be held soon",
  body: "All students please be informed that Annual Day Competition for our Campus will be held on 17th of March, 2023. Students are requested to participate and showcase their talents and win exciting prizes.",
  published: new Date(2023, 2, 14),
}); */

/* const f1 = new AcademicEvent({
  title: "CT2 - Philosophy of Engineering",
  subtitle: "Syllabus: Unit 2 & 3",
  facultyId: new mongoose.Types.ObjectId("64134546aa804cc8b5d60e24"),
  classId: [
    new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a31"),
    new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a32"),
  ],
  start: new Date(2023, 2, 27, 8, 10),
  end: new Date(2023, 2, 27, 9, 40),
});

const f2 = new AcademicEvent({
  title: "CT2 - Electrical and Electronics Engineering",
  subtitle: "Syllabus: Unit 2 & 3",
  facultyId: new mongoose.Types.ObjectId("64134546aa804cc8b5d60e24"),
  classId: [new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a31")],
  start: new Date(2023, 2, 28, 8, 10),
  end: new Date(2023, 2, 28, 9, 40),
});

const f3 = new AcademicEvent({
  title: "CT2 - Advanced Calculus & Complex Analysis",
  subtitle: "Syllabus: Unit 2 & 3",
  facultyId: new mongoose.Types.ObjectId("64134546aa804cc8b5d60e24"),
  classId: [new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a31")],
  start: new Date(2023, 2, 29, 8, 10),
  end: new Date(2023, 2, 29, 9, 40),
});

const f4 = new AcademicEvent({
  title: "CT2 - French, German, Japanese",
  subtitle: "Syllabus: Unit 2 & 3",
  facultyId: new mongoose.Types.ObjectId("64134546aa804cc8b5d60e24"),
  classId: [
    new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a31"),
    new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a32"),
  ],
  start: new Date(2023, 2, 30, 8, 10),
  end: new Date(2023, 2, 30, 9, 40),
});

const f5 = new AcademicEvent({
  title: "CT2 - Object Oriented Design and Programming",
  subtitle: "Syllabus: Unit 2 & 3",
  facultyId: new mongoose.Types.ObjectId("64134546aa804cc8b5d60e24"),
  classId: [
    new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a31"),
    new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a32"),
  ],
  start: new Date(2023, 2, 31, 8, 10),
  end: new Date(2023, 2, 31, 9, 40),
});

const f6 = new AcademicEvent({
  title: "CT2 - Chemistry",
  subtitle: "Syllabus: Unit 2 & 3",
  facultyId: new mongoose.Types.ObjectId("64134546aa804cc8b5d60e24"),
  classId: [new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a31")],
  start: new Date(2023, 3, 3, 8, 10),
  end: new Date(2023, 3, 3, 9, 40),
});

const f7 = new AcademicEvent({
  title: "CT2 - General Aptitude",
  subtitle: "Syllabus: Unit 2 & 3",
  facultyId: new mongoose.Types.ObjectId("64134546aa804cc8b5d60e24"),
  classId: [
    new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a31"),
    new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a32"),
  ],
  start: new Date(2023, 3, 5, 8, 10),
  end: new Date(2023, 3, 5, 9, 40),
}); */

async function connectToDb(): Promise<any> {
  // Connect to MongoDB (using mongoose)
  await mongoose.connect("mongodb://127.0.0.1:27017/", { dbName: "euniz" });
  console.log(`Connected to MongoDB ${mongoose.connection.readyState}`);
  // await f1.save();
  /*await Class.findByIdAndUpdate(
    new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a31"),
    { $push: { students: { sid: f1._id, name: f1.name, reg: f1.reg } } }
  );
  console.log("Saved one");*/
  // await f2.save();
  /*await Class.findByIdAndUpdate(
    new mongoose.Types.ObjectId("6415555bb0c6fb0ee5dc9a32"),
    { $push: { students: { sid: f2._id, name: f2.name, reg: f2.reg } } }
  );
  console.log("Saved two"); */
  // await f3.save();
  // await f4.save();
  // await f5.save();
  // await f6.save();
  // await f7.save();
}

export { connectToDb };
