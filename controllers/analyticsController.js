import Analytics from "../models/AnalyticsModel.js"


export const UpdateAnalytics = async (req, res) => {
    try {
        const invprofit = req.body["profit"]
        const presentMonth = req.body["presentMonth"]
        const updateDate = req.body["updateDate"]
        const year = req.body["year"]

        console.log(presentMonth, updateDate)
        let analytics = await Analytics.findOne({ monthname: presentMonth });

        if (!analytics) {
            analytics = new Analytics({
                monthname: presentMonth,
                profit: invprofit,
                lastupdated: updateDate,
                year: year
            });
        } else {
            analytics.noinv += 1;
            analytics.profit += invprofit;
            analytics.lastupdated = updateDate;

        }


        await analytics.save();

        res.status(200).json({ analytics });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



export const GetAnalytics = async (req, res) => {

    try {
        const analytics = await Analytics.find({});

        if (analytics.length === 0) {
            return res.status(404).json({ success: false, message: 'No analytics found.' });
        }
        return res.json(analytics);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// export const GetAnalyticsby = async (req, res) => {
//     const catlog = req.params.catlogname;
//     console.log(catlog)
//     try {
//         const rescatlog = await Products.find({ catlogname: catlog });

//         if (rescatlog.length === 0) {
//             return res.status(404).json({ success: false, message: 'No catlog found ' });
//         }
//         console.log(rescatlog[0]["id"])
//         return res.json(rescatlog);
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Server Error' });
//     }
// };


