Ext.data.JsonP.SpriteMap({"tagname":"class","name":"SpriteMap","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-SpriteMap","members":{"cfg":[],"property":[{"name":"activeLoop","tagname":"property","owner":"SpriteMap","meta":{},"id":"property-activeLoop"}],"method":[{"name":"constructor","tagname":"method","owner":"SpriteMap","meta":{},"id":"method-constructor"},{"name":"clone","tagname":"method","owner":"SpriteMap","meta":{},"id":"method-clone"},{"name":"draw","tagname":"method","owner":"SpriteMap","meta":{"chainable":true},"id":"method-draw"},{"name":"reset","tagname":"method","owner":"SpriteMap","meta":{"chainable":true},"id":"method-reset"},{"name":"runOnce","tagname":"method","owner":"SpriteMap","meta":{"chainable":true},"id":"method-runOnce"},{"name":"set","tagname":"method","owner":"SpriteMap","meta":{"chainable":true},"id":"method-set"},{"name":"start","tagname":"method","owner":"SpriteMap","meta":{"chainable":true},"id":"method-start"},{"name":"stop","tagname":"method","owner":"SpriteMap","meta":{"chainable":true},"id":"method-stop"},{"name":"unset","tagname":"method","owner":"SpriteMap","meta":{"chainable":true},"id":"method-unset"},{"name":"use","tagname":"method","owner":"SpriteMap","meta":{"chainable":true},"id":"method-use"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":14,"files":[{"filename":"sprite.js","href":"sprite2.html#SpriteMap"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/sprite2.html#SpriteMap' target='_blank'>sprite.js</a></div></pre><div class='doc-contents'><p>Manage multiple sprite animations in the same sprite sheet.</p>\n\n<p>All methods except <a href=\"#!/api/SpriteMap-method-clone\" rel=\"SpriteMap-method-clone\" class=\"docClass\">SpriteMap.clone</a> are chainable (they return the SpriteMap\ninstance).</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activeLoop' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SpriteMap'>SpriteMap</span><br/><a href='source/sprite2.html#SpriteMap-property-activeLoop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SpriteMap-property-activeLoop' class='name not-expandable'>activeLoop</a><span> : String</span></div><div class='description'><div class='short'><p>The name of the active animation sequence.</p>\n</div><div class='long'><p>The name of the active animation sequence.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SpriteMap'>SpriteMap</span><br/><a href='source/sprite2.html#SpriteMap-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/SpriteMap-method-constructor' class='name expandable'>SpriteMap</a>( <span class='pre'>src, animations, options</span> ) : <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></div><div class='description'><div class='short'>Creates a new SpriteMap instance. ...</div><div class='long'><p>Creates a new SpriteMap instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>src</span> : String<div class='sub-desc'><p>The image to draw, in the form of one of the following:</p>\n\n<ul>\n<li>The file path of the base image</li>\n<li>An Image</li>\n<li>A Canvas</li>\n</ul>\n\n</div></li><li><span class='pre'>animations</span> : Object<div class='sub-desc'><p>A map (Object) where the keys are the names of animation sequences and the\n  values are maps (Objects) specifying the starting and ending frames of the\n  relevant animation sequence. All properties are optional:</p>\n\n<ul>\n<li>startRow: The row at which to start the animation sequence. Defaults to\n0 (zero) - the first row.</li>\n<li>startCol: The column at which to start the animation sequence. Defaults\nto 0 (zero) - the first column.</li>\n<li>endRow: The row at which to end the animation sequence. Defaults to the\nlast row.</li>\n<li>endCol: The column at which to end the animation sequence. Defaults to\nthe last column.</li>\n<li>squeeze: Determines which frames are included in the animation loop. If\nset to true, frames are constrained within startCol and endCol,\nregardless of the row. If set to false (the default), frames will run to\nthe last column in the Sprite and then loop back to the first column on\nthe next row in the Sprite until reaching the last frame in the loop.\nMore details on how this work are documented in the <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a>\nconstructor.</li>\n<li>flipped: An object with \"horizontal\" and \"vertical\" properties\n(both Booleans) indicating whether the Sprite should be drawn flipped\nalong the horizontal or vertical axes.</li>\n</ul>\n\n\n<p>  Alternatively, instead of the inner values being Objects with the\n  properties specified above, they can be Arrays that hold the same values\n  (in the same order). This is less clear to read, but more concise to\n  write.</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>This parameter is the same as the options parameter for the <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a>\n  class.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SpriteMap'>SpriteMap</span><br/><a href='source/sprite2.html#SpriteMap-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SpriteMap-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> ) : <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></div><div class='description'><div class='short'>Clone the SpriteMap. ...</div><div class='long'><p>Clone the SpriteMap.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></span><div class='sub-desc'><p>A SpriteMap instance that is identical to the current instance.</p>\n</div></li></ul></div></div></div><div id='method-draw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SpriteMap'>SpriteMap</span><br/><a href='source/sprite2.html#SpriteMap-method-draw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SpriteMap-method-draw' class='name expandable'>draw</a>( <span class='pre'>ctx, x, y, [w], [h]</span> ) : <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Draw the sprite's current frame. ...</div><div class='long'><p>Draw the sprite's current frame.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctx</span> : CanvasRenderingContext2D<div class='sub-desc'><p>The canvas graphics context onto which the sprite should be drawn.</p>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>The x-coordinate of the canvas graphics context at which the upper-left\n  corner of the Sprite should be drawn. This is usually (but not always)\n  the horizontal distance in pixels from the left side of the canvas.</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>The y-coordinate of the canvas graphics context at which the upper-left\n  corner of the Sprite should be drawn. This is usually (but not always)\n  the vertical distance in pixels from the top of the canvas.</p>\n</div></li><li><span class='pre'>w</span> : Number (optional)<div class='sub-desc'><p>The width of the image when drawn onto the canvas. Defaults to the\n  Sprite's projected width, which in turn defaults to the frame width.</p>\n</div></li><li><span class='pre'>h</span> : Number (optional)<div class='sub-desc'><p>The height of the image when drawn onto the canvas. Defaults to the\n  Sprite's projected height, which in turn defaults to the frame height.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SpriteMap'>SpriteMap</span><br/><a href='source/sprite2.html#SpriteMap-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SpriteMap-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> ) : <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Reset the active animation sequence to the first frame. ...</div><div class='long'><p>Reset the active animation sequence to the first frame.</p>\n\n<p>If the sequence is running when <a href=\"#!/api/SpriteMap-method-reset\" rel=\"SpriteMap-method-reset\" class=\"docClass\">SpriteMap.reset</a>() is called, it will still\nbe running afterwards, so usually <a href=\"#!/api/SpriteMap-method-stop\" rel=\"SpriteMap-method-stop\" class=\"docClass\">SpriteMap.stop</a>() is called first.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-runOnce' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SpriteMap'>SpriteMap</span><br/><a href='source/sprite2.html#SpriteMap-method-runOnce' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SpriteMap-method-runOnce' class='name expandable'>runOnce</a>( <span class='pre'>[callback], [name]</span> ) : <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Run an animation sequence once. ...</div><div class='long'><p>Run an animation sequence once.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>A function to call after the animation sequence is done running.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sprite</span> : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a> (optional)<div class='sub-desc'><p>The Sprite that was animated. Its \"spriteMap\" property holds the parent\n  SpriteMap.</p>\n</div></li></ul></div></li><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>The name of the animation sequence to start. If not given, defaults to\n  the active animation sequence. If no animation sequence is active, the\n  default sequence is to show the whole sprite sheet.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SpriteMap'>SpriteMap</span><br/><a href='source/sprite2.html#SpriteMap-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SpriteMap-method-set' class='name expandable'>set</a>( <span class='pre'>name, [options]</span> ) : <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Add or modify an animation sequence. ...</div><div class='long'><p>Add or modify an animation sequence.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the sequence.</p>\n</div></li><li><span class='pre'>options</span> : Object/Array (optional)<div class='sub-desc'><p>Specifies the frames of the animation sequence. If an Array is passed,\n  the values should be included in the order below.</p>\n<ul><li><span class='pre'>startRow</span> : Number (optional)<div class='sub-desc'><p>The index of the sequence's starting row.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>startCol</span> : Number (optional)<div class='sub-desc'><p>The index of the sequence's starting column.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>endRow</span> : Number (optional)<div class='sub-desc'><p>The index of the sequence's ending row. Defaults to the Sprite's last\n  row.</p>\n</div></li><li><span class='pre'>endCol</span> : Number (optional)<div class='sub-desc'><p>The index of the sequence's ending column. Defaults to the Sprite's last\n  column.</p>\n</div></li><li><span class='pre'>squeeze</span> : Boolean (optional)<div class='sub-desc'><p>Determines which frames are included in the animation loop. If set to\n  true, frames are constrained within startCol and endCol, regardless of\n  the row. If set to false (the default), frames will run to the last\n  column in the Sprite and then loop back to the first column on the next\n  row in the Sprite until reaching the last frame in the loop. More\n  details on how this work are documented in the <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a>\n  constructor.</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>flipped</span> : Object (optional)<div class='sub-desc'><p>An object with \"horizontal\" and \"vertical\" properties (both Booleans)\n  indicating whether the Sprite should be drawn flipped along the\n  horizontal or vertical axes.</p>\n<p>Defaults to: <code>{horizontal: false, vertical: false}</code></p><ul><li><span class='pre'>horizontal</span> : Boolean (optional)<div class='sub-desc'><p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>vertical</span> : Boolean (optional)<div class='sub-desc'><p>Defaults to: <code>false</code></p></div></li></ul></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SpriteMap'>SpriteMap</span><br/><a href='source/sprite2.html#SpriteMap-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SpriteMap-method-start' class='name expandable'>start</a>( <span class='pre'>[name]</span> ) : <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Start the animation sequence. ...</div><div class='long'><p>Start the animation sequence.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>The name of the animation sequence to start. If not given, defaults to\n  the active animation sequence. If no animation sequence is active, the\n  default sequence is to show the whole sprite sheet.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SpriteMap'>SpriteMap</span><br/><a href='source/sprite2.html#SpriteMap-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SpriteMap-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> ) : <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Stop the currently running animation sequence. ...</div><div class='long'><p>Stop the currently running animation sequence.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-unset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SpriteMap'>SpriteMap</span><br/><a href='source/sprite2.html#SpriteMap-method-unset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SpriteMap-method-unset' class='name expandable'>unset</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Remove an animation sequence. ...</div><div class='long'><p>Remove an animation sequence.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The animation sequence to remove.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-use' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SpriteMap'>SpriteMap</span><br/><a href='source/sprite2.html#SpriteMap-method-use' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SpriteMap-method-use' class='name expandable'>use</a>( <span class='pre'>name, [restartIfInUse]</span> ) : <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Switch the active animation sequence. ...</div><div class='long'><p>Switch the active animation sequence.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the animation sequence to switch to.</p>\n</div></li><li><span class='pre'>restartIfInUse</span> : Boolean (optional)<div class='sub-desc'><p>A Boolean indicating whether to restart the animation sequence if the\n  specified sequence is already in use.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"});