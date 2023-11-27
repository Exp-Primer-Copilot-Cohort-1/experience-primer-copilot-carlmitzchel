function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
    var member = {
        name: 'John',
        age: 25,
        skills: skills
    };
    console.log(member.name + ' is ' + member.age + ' years old and knows ' + member.skills.join(', '));
}