using FiveScorersDotNet.Models;
using System.Collections.Generic;

namespace FiveScorersDotNet.Services
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
    }
}
