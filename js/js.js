var $hideall = document.querySelector('.hideall')
    , $sidephone = document.querySelector('.sidebarphone'),
    $searchresulat = document.querySelector('.searchresulat')
    , $comments = document.querySelector('.comments')
    , $share = document.querySelector('.share');


function showElement(e) {
    e.style.display = 'unset';
}
function hideElement(e) {
    e.style.display = 'none';
}

function parent(ele, className) {
    while (!ele.classList.contains(className)) {
        ele = ele.parentElement;
        if (ele == null) return false;
    }
    return true;
}

document.addEventListener('click', function (e) {
    if ((e.target.id == 'Notifications') || (e.target.parentElement.id == "Notifications") || parent(e.target, 'Notifications')) {
    } else {
        if (window.innerWidth > 1000) {
            document.querySelector(".Notifications").setAttribute('data-state', 'close')
            document.querySelector(".Notifications").style.height = "0px";
            document.getElementById('Notifications').style.background = "0";
            document.querySelector("#Notifications").classList.remove('selectbtn');
        }
    }
})

// document.querySelector('.search-input').addEventListener('focus' ,function(e){
//     document.querySelector('.searchresulat').style.width = "350px" ;
// })

document.querySelectorAll('.btntool').forEach(function (e) {
    e.addEventListener('click', function () {
        document.querySelectorAll('.btntool').forEach(function (n) {
            n.classList.remove('selectbtn')
        })
        e.classList.add('selectbtn');
        if (window.innerWidth > 1000) {
            if (e.id === "Notifications") {
                if (document.querySelector("." + e.id).getAttribute('data-state') == 'close') {
                    document.querySelector("." + e.id).style.height = "450px";
                    // e.style.background = "var(--Theme-Color)";
                    document.querySelector("." + e.id).setAttribute('data-state', 'open')
                }
                else {
                    document.querySelector("." + e.id).setAttribute('data-state', 'close')
                    document.querySelector("." + e.id).style.height = "0px";
                    e.classList.remove('selectbtn');
                }
                return;
            }
        }
        document.querySelectorAll('.maincontenier').forEach(function (n) {
            n.style.height = "0px"
        })
        document.querySelector(".Notifications").setAttribute('data-state', 'close')
        document.querySelector("." + e.id).style.height = "100%"
    })

})

document.querySelectorAll('.deptpart').forEach(function (e) {

    e.addEventListener('click', function () {
        document.querySelectorAll('.deptpart').forEach(function (n) {
            n.classList.remove('chselct')
        })
        e.classList.add('chselct')
    })

})


document.querySelectorAll('.post-m .fa-comment-o').forEach(function (e) {
    e.addEventListener('click', function () {
        let post = (e.parentNode).parentNode,
            comment = post.querySelector('.postcomment');
        document.querySelector('.comments-c').innerHTML = comment.innerHTML;
        showElement($hideall)
        showElement($comments)
    })

})

document.querySelectorAll('.read-more-btn').forEach(function (e) {
    e.addEventListener('click', function (n) {
        const post = (e.parentNode).parentNode;
        const summary = post.querySelector('.summary');
        const fullContent = post.querySelector('.full-content');

        if (fullContent.style.display === "none") {
            fullContent.style.display = "block"; 
            summary.style.display = "none"; 
            this.style.display = "none"; 
        } else {
            fullContent.style.display = "none"; 
            summary.style.display = "block"; 
            this.textContent = "قراءة المزيد"; 
            post.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
        }
    })
});

document.querySelectorAll('.post-m .fa-share').forEach(function (e) {

    e.addEventListener('click', function () {
        let post = (e.parentNode).parentNode;
        document.querySelector('.shareposts .post').innerHTML = post.innerHTML;
        showElement($hideall)
        showElement($share)
    })

})


document.getElementById('sendcomment').addEventListener('click', function () {
    // hideElement($comments);
    // hideElement($hideall);
    document.getElementById('commento').value = ""
})

document.querySelectorAll('.likebtnup').forEach(function (e) {

    e.addEventListener('click', function () {
        let m = Number(e.querySelector('.renum').innerText);
        if (e.classList.contains('fa-arrow-circle-o-up')) {
            e.classList.remove('fa-arrow-circle-o-up');
            e.classList.add('fa-arrow-circle-up');
            m = m + 1;
        } else {
            e.classList.remove('fa-arrow-circle-up');
            e.classList.add('fa-arrow-circle-o-up');
            m = m - 1;
        }
        e.querySelector('.renum').innerText = m;
        var n = e.parentNode.querySelector('.fa-arrow-circle-down') , s = (Number(n.querySelector('.renum').innerText)-1) ;
        n.querySelector('.renum').innerText = s;
        n.classList.remove('fa-arrow-circle-down')
        n.classList.add('fa-arrow-circle-o-down')
    })

})

document.querySelectorAll('.likebtndown').forEach(function (e) {

    e.addEventListener('click', function () {
        let m = Number(e.querySelector('.renum').innerText);
        if (e.classList.contains('fa-arrow-circle-o-down')) {
            e.classList.remove('fa-arrow-circle-o-down');
            e.classList.add('fa-arrow-circle-down');
            m = m + 1;
        } else {
            e.classList.remove('fa-arrow-circle-down');
            e.classList.add('fa-arrow-circle-o-down');
            m = m - 1;
        }
        e.querySelector('.renum').innerText = m;
        var n = e.parentNode.querySelector('.fa-arrow-circle-up'), s = (Number(n.querySelector('.renum').innerText)-1) ;
        n.querySelector('.renum').innerText = s;
        n.classList.remove('fa-arrow-circle-up')
        n.classList.add('fa-arrow-circle-o-up')
    })
})


$hideall.addEventListener('click', function () {
    $sidephone.style.width = "0px";
    hideElement($hideall);
    hideElement($comments);
    hideElement($share);
    document.getElementById('sharetext').value = ""
    document.getElementById('commento').value = ""
}
)

document.getElementById('bars').addEventListener('click', function () {
    showElement($hideall);
    showElement($sidephone);
    $sidephone.style.width = "70%";
})


document.querySelector('.search-input').addEventListener('input', function (e) {
    $searchresulat.innerHTML += e.target.value
})
const button = document.getElementById('theme');
let isDefaultTheme = localStorage.getItem('theme') !== 'dark';

// تطبيق الثيم المحفوظ عند تحميل الصفحة
if (!isDefaultTheme) {
    document.documentElement.style.setProperty('--Theme-Color', '#8181f9');
    document.documentElement.style.setProperty('--shadcolor', '#fff');
    document.documentElement.style.setProperty('--hovercolor', '#242424');
    document.documentElement.style.setProperty('--background-Color', '#333');
}

button.addEventListener('click', () => {
    if (isDefaultTheme) {
        document.documentElement.style.setProperty('--Theme-Color', '#8181f9');
        document.documentElement.style.setProperty('--shadcolor', '#fff');
        document.documentElement.style.setProperty('--hovercolor', '#242424');
        document.documentElement.style.setProperty('--background-Color', '#333');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.style.setProperty('--Theme-Color', '#1281c4');
        document.documentElement.style.setProperty('--shadcolor', '#000');
        document.documentElement.style.setProperty('--hovercolor', '#dedede4b');
        document.documentElement.style.setProperty('--background-Color', '#fff');
        localStorage.setItem('theme', 'light');
    }
    isDefaultTheme = !isDefaultTheme;
});


document.querySelectorAll('.posttext').forEach(function (e) {

    e.addEventListener('input', function () {
        e.style.height = 'auto';
        e.style.height = this.scrollHeight + 'px';
    })
})

document.querySelector('.AttachBtn').addEventListener('click', function () {
    document.getElementById('imguplod').click();
});

document.getElementById('imguplod').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const postContent = document.querySelector('.postcontent');
            const img = document.createElement('img');
            const textarea = document.createElement('textarea');
            textarea.classList.add('posttext');
            img.src = e.target.result;
            postContent.appendChild(img);
            postContent.appendChild(textarea);
            textarea.focus()
        };
        reader.readAsDataURL(file);
    }
});


document.querySelectorAll('.book').forEach(function (e) {
    e.addEventListener('mouseenter', function () {
        e.querySelector('.book img').style.transition = "transform .3s"
        e.querySelector('.bookpaper1').style.transition = "transform 1s"
        e.querySelector('.book img').style.transform = "rotateY(90deg)"
        e.querySelector('.bookpaper1').style.transform = "rotateY(180deg)"
    })

    e.addEventListener('mouseleave', function () {
        e.querySelector('.book img').style.transition = "transform 1s"
        e.querySelector('.bookpaper1').style.transition = "transform .3s"
        e.querySelector('.bookpaper1').style.transform = "rotateY(0deg)"
        e.querySelector('.book img').style.transform = "translateX(0%)"
    })
})

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.book').forEach(function (e) {
        setcovercolor(e)
    })
    // let m = document.querySelector(".home").innerHTML ;

    // for (let n = 0; n < 10; n++) {
    //     document.querySelector('.home').innerHTML += m;  
    // }
}
)

document.querySelector('.back-nav').addEventListener('click',function(){
    document.querySelector(".profilepage").style.display = " none"
})

document.querySelectorAll('.account-d').forEach(function(e){
    e.addEventListener('click',function(e){
        document.querySelector(".profilepage").style.display = "block"
    })
})

function setcovercolor(e) {
    const img = e.querySelector('.book img');

    img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        let r = 0, g = 0, b = 0;
        const length = data.length / 4;

        for (let i = 0; i < length; i++) {
            r += data[i * 4];
            g += data[i * 4 + 1];
            b += data[i * 4 + 2];
        }

        // حساب اللون السائد
        r = Math.floor(r / length);
        g = Math.floor(g / length);
        b = Math.floor(b / length);
        const darkeningFactor = 0.8; // نسبة التعتيم (0.0 - 1.0)
        r = Math.floor(r * darkeningFactor);
        g = Math.floor(g * darkeningFactor);
        b = Math.floor(b * darkeningFactor);

        // تعيين اللون كخلفية لـ bookpaper2
        e.parentNode.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        const bookpaper2 = e.querySelector('.bookpaper2');
        const bookpaper1 = e.querySelector('.bookpaper1');
        bookpaper1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        bookpaper2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };

    // تحميل الصورة
    img.src = img.src;
}

function create() {
    var div = document.getElementById('stuff');
    var num_lis = div.getElementsByTagName("li").length;
    var cosas = prompt('Give me more', '');
    if (cosas !== null) {
        var html = "<li id='" + num_lis + "'>" + cosas +
            "<input type='checkbox' name='done' value='1' onclick='done(" + num_lis + ");'></li>"; div.innerHTML += html;
    }
}
function done(li_id) {
    var li = document.getElementById(li_id); var mark = li.classList.contains('done');
    if (!mark) li.className = 'done'; else li.className = '';
}
function clearUl() { var div = document.getElementById('stuff'); div.innerHTML = ''; }
