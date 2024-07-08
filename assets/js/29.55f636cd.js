(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{310:function(e,t,a){"use strict";a.r(t);var n=a(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"blender-python-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blender-python-api"}},[e._v("#")]),e._v(" Blender Python API")]),e._v(" "),t("p",[e._v("Blender提供python接口，基于此接口，可以完成如下的功能：")]),e._v(" "),t("ul",[t("li",[e._v("编辑用户界面可以编辑的任何数据（场景、网格、粒子等）。")]),e._v(" "),t("li",[e._v("修改用户偏好、键盘映射和主题。")]),e._v(" "),t("li",[e._v("使用自己的设置运行工具。")]),e._v(" "),t("li",[e._v("创建用户界面元素，例如菜单、标题和面板。")]),e._v(" "),t("li",[e._v("创建新工具。")]),e._v(" "),t("li",[e._v("创建交互式工具。")]),e._v(" "),t("li",[e._v("创建与 Blender 集成的新渲染引擎。")]),e._v(" "),t("li",[e._v("订阅数据及其属性的更改。")]),e._v(" "),t("li",[e._v("在现有的 Blender 数据中定义新设置。")]),e._v(" "),t("li",[e._v("使用 Python 在 3D 视口中绘图。")])]),e._v(" "),t("h1",{attrs:{id:"关键概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关键概念"}},[e._v("#")]),e._v(" 关键概念")]),e._v(" "),t("h2",{attrs:{id:"数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[e._v("#")]),e._v(" 数据")]),e._v(" "),t("h3",{attrs:{id:"访问数据块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问数据块"}},[e._v("#")]),e._v(" 访问数据块")]),e._v(" "),t("p",[e._v("你可以使用 Python API 以与动画系统或用户界面相同的方式访问 Blender 的数据；这意味着可以通过按钮更改的任何设置也可以使用 Python 进行更改。使用模块可以访问当前加载的 blend 文件中的数据bpy.data。它可以访问库数据，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(">>> bpy.data.objects\n<bpy_collection[3], BlendDataObjects>\n>>> bpy.data.scenes\n<bpy_collection[1], BlendDataScenes>\n>>> bpy.data.materials\n<bpy_collection[1], BlendDataMaterials>\n")])])]),t("p",[e._v("您会注意到，可以使用索引和字符串来访问集合的成员。与 Python 字典不同，这两种方法都可用；但是，成员的索引可能会在运行 Blender 时发生变化")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('>>> list(bpy.data.objects)\n[bpy.data.objects["Cube"], bpy.data.objects["Plane"]]\n>>> bpy.data.objects[\'Cube\']\nbpy.data.objects["Cube"]\n>>> bpy.data.objects[0]\nbpy.data.objects["Cube"]\n')])])]),t("p",[e._v("一旦你有了数据块，比如材料、物体、集合等，它的属性就可以像使用图形界面更改设置一样访问。事实上，每个按钮的工具提示还会显示 Python 属性，这有助于找到脚本中要更改的设置。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(">>> bpy.data.objects[0].name\n'Camera'\n>>> bpy.data.scenes[\"Scene\"]\nbpy.data.scenes['Scene']\n>>> bpy.data.materials.new(\"MyMaterial\")\nbpy.data.materials['MyMaterial']\n")])])]),t("p",[e._v("为了测试要访问哪些数据，使用 Python 控制台（它有自己的空间类型）很有用。它支持自动完成，让您可以快速探索文件中的数据。")]),e._v(" "),t("p",[e._v("通过控制台可以快速找到的数据路径示例：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('>>> bpy.data.scenes[0].render.resolution_percentage\n100\n>>> bpy.data.scenes[0].objects["Torus"].data.vertices[0].co.x\n1.0\n')])])]),t("h3",{attrs:{id:"数据创建-删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据创建-删除"}},[e._v("#")]),e._v(" 数据创建/删除")]),e._v(" "),t("p",[e._v("当你熟悉其他 Python API 时，你可能会惊讶于 bpy API 中的新数据块无法通过调用类来创建：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('>>> bpy.types.Mesh()\nTraceback (most recent call last):\n  File "<blender_console>", line 1, in <module>\nTypeError: bpy_struct.__new__(type): expected a single argument\n\n')])])]),t("p",[e._v("这是 API 设计的故意设计。Blender Python API 无法创建存在于主 Blender 数据库（通过 访问bpy.data）之外的 Blender 数据，因为这些数据由 Blender 管理（保存、加载、撤消、附加等）。")]),e._v(" "),t("p",[e._v("通过 meshs 中的集合方法添加和删除数据bpy.data，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('>>> mesh = bpy.data.meshes.new(name="MyMesh")\n>>> print(mesh)\n<bpy_struct, Mesh("MyMesh.001")>\n>>> bpy.data.meshes.remove(mesh)\n')])])]),t("h3",{attrs:{id:"自定义属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义属性"}},[e._v("#")]),e._v(" 自定义属性")]),e._v(" "),t("p",[e._v("Python 可以访问任何具有 ID 的数据块（可以链接并从中访问的数据bpy.data）上的属性。分配属性时，您可以选择自己的名称，这些名称将在需要时创建，如果它们已经存在，则会被覆盖。")]),e._v(" "),t("p",[e._v("该数据与 blend 文件一起保存并与对象一起复制，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('bpy.context.object["MyOwnProperty"] = 42\n\nif "SomeProp" in bpy.context.object:\n    print("Property found")\n\n# Use the get function like a Python dictionary\n# which can have a fallback value.\nvalue = bpy.data.scenes["Scene"].get("test_prop", "fallback value")\n\n# dictionaries can be assigned as long as they only use basic types.\ncollection = bpy.data.collections.new("MyTestCollection")\ncollection["MySettings"] = {"foo": 10, "bar": "spam", "baz": {}}\n\ndel collection["MySettings"]\n')])])]),t("p",[e._v("请注意，这些属性只能分配基本 Python 类型：")]),e._v(" "),t("ul",[t("li",[e._v("整数、浮点数、字符串")]),e._v(" "),t("li",[e._v("整数或浮点数数组")]),e._v(" "),t("li",[e._v("字典（仅支持字符串键，值也必须是基本类型）")])]),e._v(" "),t("p",[e._v("这些属性在 Python 之外有效。它们可以通过曲线制作动画或用于驱动程序路径。")]),e._v(" "),t("h2",{attrs:{id:"语境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语境"}},[e._v("#")]),e._v(" 语境")]),e._v(" "),t("p",[e._v("虽然能够直接按名称或列表访问数据很有用，但更常见的做法是根据用户的选择进行操作。上下文始终可用bpy.context，可用于获取活动对象、场景、工具设置以及许多其他属性。")]),e._v(" "),t("p",[e._v("一些常见的用例是：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("bpy.context.object\nbpy.context.selected_objects\nbpy.context.visible_bones\n")])])]),t("p",[e._v("请注意，上下文是只读的，这意味着这些值不能直接修改。但可以通过运行 API 函数或使用数据 API 来更改它们。")]),e._v(" "),t("p",[e._v("因此会引发错误。但可以按预期工作。bpy.context.active_object = objbpy.context.view_layer.objects.active = obj")]),e._v(" "),t("p",[e._v("上下文属性会根据访问位置而变化。3D 视口具有与 Python 控制台不同的上下文成员，因此在访问上下文属性时请注意确保用户状态已知。")]),e._v(" "),t("p",[e._v("请参阅bpy.contextAPI 参考。")]),e._v(" "),t("h2",{attrs:{id:"操作符-工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作符-工具"}},[e._v("#")]),e._v(" 操作符（工具）")]),e._v(" "),t("p",[e._v("操作符是用户通常通过按钮、菜单项或快捷键访问的工具。从用户的角度来看，它们是一种工具，但 Python 可以通过模块使用自己的设置来运行它们bpy.ops。")]),e._v(" "),t("p",[e._v("例子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n>>> bpy.ops.mesh.flip_normals()\n{'FINISHED'}\n>>> bpy.ops.mesh.hide(unselected=False)\n{'FINISHED'}\n>>> bpy.ops.object.transform_apply()\n{'FINISHED'}\n\n")])])]),t("blockquote",[t("p",[e._v("提示\n运算符速查表列出 了所有运算符及其默认值（以 Python 语法表示），以及生成的文档。这是了解 Blender 所有运算符的好方法。")])]),e._v(" "),t("h3",{attrs:{id:"操作符-poll"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作符-poll"}},[e._v("#")]),e._v(" 操作符 Poll(")]),e._v(" "),t("p",[e._v("许多操作符都有一个“轮询”函数，用于检查光标是否位于有效区域或对象是否处于正确模式（编辑模式、权重绘制模式等）。当操作符的轮询函数在 Python 中失败时，会引发异常。")]),e._v(" "),t("p",[e._v("例如，bpy.ops.view3d.render_border()从控制台调用会引发以下错误：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("RuntimeError: Operator bpy.ops.view3d.render_border.poll() failed, context is incorrect\n")])])]),t("p",[e._v("在这种情况下，上下文必须是带有活动摄像机的 3D 视口。")]),e._v(" "),t("p",[e._v("为了避免在调用运算符的任何地方使用 try-except 子句，您可以调用运算符自己的poll()函数来检查它是否可以在当前上下文中运行该运算符。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if bpy.ops.view3d.render_border.poll():\n    bpy.ops.view3d.render_border()\n")])])]),t("h2",{attrs:{id:"集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成"}},[e._v("#")]),e._v(" 集成")]),e._v(" "),t("p",[e._v("Python脚本可以通过以下方式与Blender集成：")]),e._v(" "),t("ul",[t("li",[e._v("通过定义渲染引擎。")]),e._v(" "),t("li",[e._v("通过定义运算符。")]),e._v(" "),t("li",[e._v("通过定义菜单、标题和面板。")]),e._v(" "),t("li",[e._v("通过在现有菜单、标题和面板中插入新按钮。")])]),e._v(" "),t("p",[e._v("在 Python 中，这是通过定义一个类来实现的，该类是现有类型的子类。")]),e._v(" "),t("p",[e._v("示例运算")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import bpy\n\n\ndef main(context):\n    for ob in context.scene.objects:\n        print(ob)\n\n\nclass SimpleOperator(bpy.types.Operator):\n    """Tooltip"""\n    bl_idname = "object.simple_operator"\n    bl_label = "Simple Object Operator"\n\n    @classmethod\n    def poll(cls, context):\n        return context.active_object is not None\n\n    def execute(self, context):\n        main(context)\n        return {\'FINISHED\'}\n\n\ndef menu_func(self, context):\n    self.layout.operator(SimpleOperator.bl_idname, text=SimpleOperator.bl_label)\n\n\n# Register and add to the "object" menu (required to also use F3 search "Simple Object Operator" for quick access).\ndef register():\n    bpy.utils.register_class(SimpleOperator)\n    bpy.types.VIEW3D_MT_object.append(menu_func)\n\n\ndef unregister():\n    bpy.utils.unregister_class(SimpleOperator)\n    bpy.types.VIEW3D_MT_object.remove(menu_func)\n\n\nif __name__ == "__main__":\n    register()\n\n    # test call\n    bpy.ops.object.simple_operator()\n\n')])])]),t("p",[e._v("该脚本一旦运行，SimpleOperator就会在 Blender 中注册，可以从 Operator Search 中调用或添加到工具栏。")]),e._v(" "),t("p",[e._v("运行脚本：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("启动 Blender 并切换到 Scripting 工作区。")])]),e._v(" "),t("li",[t("p",[e._v("单击文本编辑器中的新建按钮来创建一个新的文本数据块。")])]),e._v(" "),t("li",[t("p",[e._v("从上面的代码复制并将其粘贴到文本编辑器中。")])]),e._v(" "),t("li",[t("p",[e._v("单击运行脚本按钮。")])]),e._v(" "),t("li",[t("p",[e._v("将光标移到 3D 视图中，打开“操作符搜索”菜单，然后输入“Simple”。")])]),e._v(" "),t("li",[t("p",[e._v("点击搜索到的“简单操作符”项。")])])]),e._v(" "),t("blockquote",[t("p",[e._v("也可以看看\n带有前缀的类成员bl_记录在 API 参考中bpy.types.Operator。")])]),e._v(" "),t("h3",{attrs:{id:"示例面板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例面板"}},[e._v("#")]),e._v(" 示例面板")]),e._v(" "),t("p",[e._v("面板被注册为一个类，就像一个操作符一样。请注意bl_用于设置其显示上下文的额外变量。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import bpy\n\n\nclass HelloWorldPanel(bpy.types.Panel):\n    """Creates a Panel in the Object properties window"""\n    bl_label = "Hello World Panel"\n    bl_idname = "OBJECT_PT_hello"\n    bl_space_type = \'PROPERTIES\'\n    bl_region_type = \'WINDOW\'\n    bl_context = "object"\n\n    def draw(self, context):\n        layout = self.layout\n\n        obj = context.object\n\n        row = layout.row()\n        row.label(text="Hello world!", icon=\'WORLD_DATA\')\n\n        row = layout.row()\n        row.label(text="Active object is: " + obj.name)\n        row = layout.row()\n        row.prop(obj, "name")\n\n        row = layout.row()\n        row.operator("mesh.primitive_cube_add")\n\n\ndef register():\n    bpy.utils.register_class(HelloWorldPanel)\n\n\ndef unregister():\n    bpy.utils.unregister_class(HelloWorldPanel)\n\n\nif __name__ == "__main__":\n    register()\n')])])]),t("p",[e._v("运行脚本：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("启动 Blender 并切换到 Scripting 工作区。")])]),e._v(" "),t("li",[t("p",[e._v("单击文本编辑器中的新建按钮来创建一个新的文本数据块。")])]),e._v(" "),t("li",[t("p",[e._v("从上面的代码复制并将其粘贴到文本编辑器中。")])]),e._v(" "),t("li",[t("p",[e._v("单击运行脚本按钮。")])])]),e._v(" "),t("p",[e._v("查看结果：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("选择默认立方体。")])]),e._v(" "),t("li",[t("p",[e._v("单击按钮面板中的对象属性图标（最右边；显示为一个小立方体）。")])]),e._v(" "),t("li",[t("p",[e._v("向下滚动即可看到名为“Hello World Panel”的面板。")])]),e._v(" "),t("li",[t("p",[e._v("更改对象名称也会更新Hello World Panel 的名称：字段。")])])]),e._v(" "),t("p",[e._v("注意行分布以及通过代码定义的标签和属性。")]),e._v(" "),t("blockquote",[t("p",[e._v("也可看看\nbpy.types.Panel")])]),e._v(" "),t("h2",{attrs:{id:"类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[e._v("#")]),e._v(" 类型")]),e._v(" "),t("p",[e._v("Blender 定义了许多 Python 类型，但也使用 Python 原生类型。Blender 的 Python API 可分为三类。")]),e._v(" "),t("p",[e._v("原生类型\n在简单的情况下，返回数字或字符串作为自定义类型会很麻烦，因此将它们作为普通 Python 类型进行访问。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Blender 浮点数、整数、布尔值 -> 浮点数、整数、布尔值")])]),e._v(" "),t("li",[t("p",[e._v("Blender 枚举器 -> 字符串")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(">>> C.object.rotation_mode = 'AXIS_ANGLE'\n")])])]),t("ul",[t("li",[e._v("Blender 枚举器（多个）-> 字符串集")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# setting multiple camera overlay guides\nbpy.context.scene.camera.data.show_guide = {'GOLDEN', 'CENTER'}\n\n# passing as an operator argument for report types\nself.report({'WARNING', 'INFO'}, \"Some message!\")\n")])])]),t("h3",{attrs:{id:"内部类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内部类型"}},[e._v("#")]),e._v(" 内部类型")]),e._v(" "),t("p",[e._v("bpy.types.bpy_struct用于 Blender 数据块和集合。还用于包含其自身属性的数据：集合、网格、骨骼、场景等。")]),e._v(" "),t("p",[e._v("有两种主要类型可以包装 Blender 的数据，一种用于数据块（内部称为bpy_struct），另一种用于属性。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(">>> bpy.context.object\nbpy.data.objects['Cube']\n>>> C.scene.objects\nbpy.data.scenes['Scene'].objects\n\n")])])]),t("p",[e._v("请注意，这些类型引用了 Blender 的数据，因此对它们的修改是立即可见的。")]),e._v(" "),t("h3",{attrs:{id:"mathutils"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mathutils"}},[e._v("#")]),e._v(" Mathutils")]),e._v(" "),t("p",[e._v("可从 访问的mathutils是向量、四元数、欧拉角、矩阵和颜色类型。某些属性（例如bpy.types.Object.location、 bpy.types.PoseBone.rotation_euler和 ）bpy.types.Scene.cursor_location 可作为特殊数学类型访问，这些类型可一起使用并以各种有用的方式进行操作。")]),e._v(" "),t("p",[e._v("矩阵、向量乘法的示例：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("bpy.context.object.matrix_world @ bpy.context.object.data.verts[0].co\n")])])]),t("blockquote",[t("p",[e._v("笔记\nmathutils 类型保留对 Blender 内部数据的引用，因此可以应用更改。\n例子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code")])])]),e._v(" "),t("h1",{attrs:{id:"modifies-the-z-axis-in-place"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modifies-the-z-axis-in-place"}},[e._v("#")]),e._v(" modifies the Z axis in place.")]),e._v(" "),t("p",[e._v("bpy.context.object.location.z += 2.0")]),e._v(" "),t("h1",{attrs:{id:"location-variable-holds-a-reference-to-the-object-too"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#location-variable-holds-a-reference-to-the-object-too"}},[e._v("#")]),e._v(" location variable holds a reference to the object too.")]),e._v(" "),t("p",[e._v("location = bpy.context.object.location\nlocation *= 2.0")]),e._v(" "),t("h1",{attrs:{id:"copying-the-value-drops-the-reference-so-the-value-can-be-passed-to"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copying-the-value-drops-the-reference-so-the-value-can-be-passed-to"}},[e._v("#")]),e._v(" Copying the value drops the reference so the value can be passed to")]),e._v(" "),t("h1",{attrs:{id:"functions-and-modified-without-unwanted-side-effects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#functions-and-modified-without-unwanted-side-effects"}},[e._v("#")]),e._v(" functions and modified without unwanted side effects.")]),e._v(" "),t("p",[e._v("location = bpy.context.object.location.copy()")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("## 动画片\n通过Python添加关键帧有两种方法。\n\n第一种是直接通过关键属性，就像用户从按钮插入关键帧一样。您也可以手动创建曲线和关键帧数据，然后将路径设置为属性。以下是两种方法的示例。两者都在活动对象的 Z 轴上插入关键帧。\n\n简单示例：\n")])])]),t("p",[e._v('obj = bpy.context.object\nobj.location[2] = 0.0\nobj.keyframe_insert(data_path="location", frame=10.0, index=2)\nobj.location[2] = 1.0\nobj.keyframe_insert(data_path="location", frame=20.0, index=2)')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("使用低级函数：\n")])])]),t("p",[e._v('obj = bpy.context.object\nobj.animation_data_create()\nobj.animation_data.action = bpy.data.actions.new(name="MyAction")\nfcu_z = obj.animation_data.action.fcurves.new(data_path="location", index=2)\nfcu_z.keyframe_points.add(2)\nfcu_z.keyframe_points[0].co = 10.0, 0.0\nfcu_z.keyframe_points[1].co = 20.0, 1.0')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code")])])])}),[],!1,null,null,null);t.default=s.exports}}]);