/*** USE THIS FILE TO SET OPTIONS ***/

setParams({
    graphFile : "dblp2002_3_prob_author.gexf",
        /*
            The GEXF file to show ! -- can be overriden by adding
            a hash to the document location, e.g. index.html#celegans.gexf
        */
	showEdges : true,
        /*
            Default state of the "show edges" button
        */
    useLens : false,
        /*
            Default state of the "use lens" button
        */
    zoomLevel : 0,
        /*
            Default zoom level. At zoom = 0, the graph should fill a 800x700px zone
         */
    curvedEdges : false,
        /*
            False for curved edges, true for straight edges
            this setting can't be changed from the User Interface
        */
    edgeWidthFactor : 1,
        /*
            Change this parameter for wider or narrower edges
            this setting can't be changed from the User Interface
        */
    minEdgeWidth : 1,
    maxEdgeWidth : 50,
    textDisplayThreshold: 9,
    nodeSizeFactor : 1,
    // minLevel      : 100,
    // maxLevel      : 5000,
        /*
            Change this parameter for smaller or larger nodes
           this setting can't be changed from the User Interface
        */
    replaceUrls : false,
        /*
            Enable the replacement of Urls by Hyperlinks
            this setting can't be changed from the User Interface
        */
    showEdgeWeight : true,
        /*
            Show the weight of edges in the list
            this setting can't be changed from the User Interface
        */
    language: 'en',
        /*
            Set to an ISO language code to switch the interface to that language.
            Available languages are English [en], French [fr], Spanish [es],
            Italian [it], Finnish [fi], Turkish [tr] and Greek [el].
            If set to false, the language will be that of the user's browser.
        */    
});

var listofFiles = new Array(
	"dblp2002_3_prob_author.gexf",
    "dblp2002_3_prob_editor.gexf",
    "dblp2013_3_prob_author.gexf",
    "dblp2013_3_prob_editor.gexf",
	"mondial2002_3_prob_province.gexf",
    "dblp2002_3_author.gexf",
    "dblp2002_3_editor.gexf",
    "dblp2013_3_author.gexf",
    "dblp2013_3_editor.gexf",
    "mondial2002_3_province.gexf"
    );
setFileList(listofFiles);