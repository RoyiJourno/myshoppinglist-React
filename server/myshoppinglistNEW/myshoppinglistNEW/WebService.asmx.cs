using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace myshoppinglistNEW
{
    /// <summary>
    /// Summary description for WebService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class WebService : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        public string SignUp(string firstName, string lastName, string email, string password, string repassword)
        {
            Person p = new Person();
            if (password == repassword)
            {
                p.email = email;
                p.firstName = firstName;
                p.lastName = lastName;
                p.password = password;
                string conStr = ConfigurationManager.ConnectionStrings["WebService"].ConnectionString;
                SqlConnection con = new SqlConnection(conStr);
                con.Open();
                SqlCommand com = new SqlCommand("INSERT INTO TBUsers (UserEmail,UserFirstName,UserLastName,UserPassword) VALUES (@email,@firstname,@lastname,@password)", con);
                com.Parameters.Add("@email", email);
                com.Parameters.Add("@firstname", firstName);
                com.Parameters.Add("@lastname", lastName);
                com.Parameters.Add("@password", password);
                com.ExecuteNonQuery();
                con.Close();
            }
            return new JavaScriptSerializer().Serialize(p);
        }

        [WebMethod]
        public string Login(string UserEmail,string UserPassword)
        {
            Person p = null;
            string conStr = ConfigurationManager.ConnectionStrings["WebService"].ConnectionString;
            SqlConnection con = new SqlConnection(conStr);
            SqlCommand com = new SqlCommand("SELECT * FROM TBUsers WHERE UserEmail='"+UserEmail+"' AND UserPassword='"+UserPassword+"'", con);
            com.Connection.Open();
            SqlDataReader reader = com.ExecuteReader();
            if (reader.Read())
            {
                p = new Person
                {
                    email = reader["UserEmail"].ToString(),
                    firstName = reader["UserFirstName"].ToString(),
                    lastName = reader["UserLastName"].ToString(),
                    password = reader["UserPassword"].ToString()
                };
            }
            com.Connection.Close();
            return new JavaScriptSerializer().Serialize(p);
        }
    }
}

public class Person
{
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string email { get; set; }
    public string password { get; set; }
}

