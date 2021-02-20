var feedBack = [];
var flag = false;
function addFeedback() {
    var feed = document.getElementById('feedback').value;
    feedBack.push(feed);
    document.getElementById('feedback').value = "";
    document.getElementById('info').style.display = "block";

    if(flag){
        var box = document.getElementById('result');
        box.removeChild(document.getElementById('FeedBacks')); //removing all feedbacks
        flag = false;
    }
}

function displayFeedback() {
    if (feedBack.length > 0) {
        var newEleDiv = document.createElement('div');
        newEleDiv.id = "FeedBacks";
        document.getElementById('result').appendChild(newEleDiv); //adding FeedBacks div in result div

        document.getElementById('FeedBacks').style.display = 'block';
        document.getElementById('info').style.display = 'none';
        for (var i = 0; i < feedBack.length; i++) {

            var newSpan1 = document.createElement("span");
            newSpan1.style.display = 'block'
            var newSpan2 = document.createElement("span");

            var node1 = document.createTextNode("Feedback " + (i + 1));
            newSpan1.appendChild(node1);
            var node2 = document.createTextNode(feedBack[i]);
            newSpan2.appendChild(node2);

            document.getElementById('FeedBacks').appendChild(newSpan1);
            document.getElementById('FeedBacks').appendChild(newSpan2);
        }

        feedBack = [];
        flag = true;
    }

}