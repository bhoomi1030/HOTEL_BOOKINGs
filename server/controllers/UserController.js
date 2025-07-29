export const getUser = async (req, res) => {
    try{
        const role = req.user.role;
        const recentsearch = req.user.recentSearch;
        res.json({ sucess : true,  role, recentsearch });
    } catch (error) {
        res.json({ success: false, message: "Failed to get user data" });
    }

    } 
export const storeRecentSearch = async (req, res) => {
    try {
        const {recentSearchedCities} = req.body;
        const user = await req.user;
        if(user.recentSearchedCities.length < 3) {
            user.recentSearchedCities.push(recentSearchedCity); // Remove the oldest search
        }else {
            user.recentSearchedCities.shift(); // Remove the oldest search
            user.recentSearchedCities.push(recentSearchedCity); // Add the new search
        }
        await user.save();
        res.json({ success: true, message: "Recent search updated successfully" });

    }catch (error) {
        res.json({ success: false, message: "Failed to update recent search" });    
    }
}
