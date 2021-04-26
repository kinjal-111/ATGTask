let isJoinGroup = true;

function toCheck() {
    if (isJoinGroup) {
        var buttonValue = document.getElementById("join-group");
        // buttonValue.innerHTML = "<span><i class="fas fa-sign-out-alt"></i></span>";
        var buttonValue = document.getElementById("join-group");
        buttonValue.innerHTML = "<span><i class='fas fa-sign-out-alt icon-class'></i>Leave Group</span>"
        buttonValue.classList.add("leave-group")
        joinGroup();
    } else {
        // document.querySelector('#joing-group').innerHTML = 
        var buttonValue = document.getElementById("join-group");
        buttonValue.innerHTML = "<span><i class='fas fa-user-plus icon-class'></i>Join Group</span>"
        buttonValue.classList.remove("leave-group")
        leaveGroup();
    }
}

function leaveGroup() {
    isJoinGroup = true;
    console.log(isJoinGroup);
    document.getElementById("recGroup").remove();
}

function joinGroup() {
    isJoinGroup = false;
    var reccomendedGroups = document.createElement("div")
    var text = document.createTextNode("RECOMMENDED GROUPS")
    reccomendedGroups.appendChild(text);
    // reccomendedGroups.innerHTML = 'RECOMMENDED GROUPS'
    reccomendedGroups.setAttribute("id", "recGroup")
    reccomendedGroups.className += "d-flex flex-column rec-class"
    let groupName = ["Leisure" , "Activism" , "MBA" , "Philosophy"]
    for(var i = 0 ; i<4 ; i++) {
        createFollowers(reccomendedGroups , groupName[i]);
    }
    var element = document.getElementById("location");
    element.appendChild(reccomendedGroups);
}

function createFollowers(reccomendedGroups , groupName) {
    var followers = document.createElement("div");
    followers.className += "d-flex justify-content-between followers-container"
    var followerContainer = `<div class="d-flex"> <img src="https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg" class="image-cover" alt=""><div class="d-flex justify-content-center" style="align-items: center; margin-left: 10px;">${groupName}</div></div><button class="follow-button">Follow</button>`
    followers.innerHTML = followerContainer;   
    reccomendedGroups.appendChild(followers);
}

