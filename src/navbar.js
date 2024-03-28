function NavBar(){
    return(
        <div>
           <ul class="nav nav-pills">
             <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/">BadBank</a></li>
             <li class="nav-item"><a class="nav-link" href="/createaccount">CreateAccount</a></li>
             <li class="nav-item"><a class="nav-link" href="/login">LogIn</a></li>
             <li class="nav-item"><a class="nav-link" href="/deposit">Deposit</a></li>
             <li class="nav-item"><a class="nav-link" href="/withdraw">Withdraw</a></li>
             <li class="nav-item"><a class="nav-link" href="/balance">Balance</a></li>
             <li class="nav-item"><a class="nav-link" href="/alldata">AllData</a></li>
          </ul>
        </div>
    );
}