/*
1- Magic Numbers & Strings – Using hardcoded values instead of constants.
❌ Code smell
if user_age > 18 and country == "SV":
    discount = 0.15

✅ Refactor
MIN_AGE = 18
COUNTRY_EL_SALVADOR = "SV"
DISCOUNT_RATE = 0.15

if user_age > MIN_AGE and country == COUNTRY_EL_SALVADOR:
    discount = DISCOUNT_RATE


*/

/*
2-Long Functions – Functions that do too much and should be broken into smaller parts.
❌ Code smell
void ProcessUser(User user) {
    Validate(user);
    SaveToDatabase(user);
    SendWelcomeEmail(user);
    LogActivity(user);
    UpdateCRM(user);
}

✅ Refactor
void ProcessUser(User user) {
    Validate(user);
    PersistUser(user);
    NotifyUser(user);
}

void PersistUser(User user) {
    SaveToDatabase(user);
    UpdateCRM(user);
}

void NotifyUser(User user) {
    SendWelcomeEmail(user);
    LogActivity(user);
}*/

/*
3-Duplicate Code – Copy-pasting logic instead of reusing functions.
❌ Code smell
if (user.Role == "Admin") {
    SendEmail(user.Email, "Welcome Admin");
}
if (user.Role == "Editor") {
    SendEmail(user.Email, "Welcome Editor");
}

✅ Refactor
void WelcomeUser(User user) {
    string message = $"Welcome {user.Role}";
    SendEmail(user.Email, message);
}*/




/*
4-Large Classes (God Objects) – Classes that handle too many responsibilities.
❌ Code smell
class UserManager {
    public void Validate(User u) {  }
    public void Save(User u) {  }
    public void SendEmail(User u) {  }
    public void LogActivity(User u) {  }
    public void UpdateCRM(User u) {  }
}

✅ Refactor
class UserValidator { public void Validate(User u) { } }
class UserRepository { public void Save(User u) {  } }
class NotificationService { public void SendEmail(User u) {  } }
class CRMUpdater { public void UpdateCRM(User u) {  } }*/

/*


5-Deeply Nested Conditionals – Complex if/else trees that make code harder to follow.
❌ Code smell
if (user != null)
{
    if (user.IsActive)
    {
        if (user.Role == "Admin")
        {
            if (user.Permissions.Contains("Edit"))
            {
                GrantAccess();
            }
        }
    }
}

✅ Refactor
if (user == null || !user.IsActive || user.Role != "Admin" || !user.Permissions.Contains("Edit"))
{
    return;
}
GrantAccess();
*/

/*
6-Commented-Out Code – Unused code that clutters the codebase.
❌ Code smell
var u = GetUser();
var n = u.Name;
var p = u.Permissions;

✅ Refactor
var user = GetUser();
var userName = user.Name;
var userPermissions = user.Permissions;

*/

/*
7-Inconsistent Naming – Variable names that don't clearly describe their purpose.
❌ Code smell
$u = getUser();
$n = $u->name;
$p = $u->permissions;

✅ Refactor
$user = getUser();
$userName = $user->name;
$userPermissions = $user->permissions;
*/